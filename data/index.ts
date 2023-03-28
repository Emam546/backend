import "@src/pre-start";
import { FilmsEditionsName, data, dataCompany } from "./data";
import FilmDB from "@src/models/film";
import CompanyDB from "@src/models/Companies";
import EditionDB from "@src/models/editions";
import connect from "@src/db/connect";
import EnvVars from "@src/declarations/major/EnvVars";
import EditTitlesDB from "@src/models/eddTitles";
import mongoose from "mongoose";
import { changeCompData, changeFilmData, getRandomValues } from "./utils";

async function UploadData() {
    async function getCompany() {
        const comps = new Array();
        for (const comp of dataCompany) {
            const res = await CompanyDB.findOne({ name: comp.name });
            if (!res) {
                changeCompData(comp);
                const ncomp = new CompanyDB(comp);
                comps.push(await ncomp.save());
            } else comps.push(res);
        }
        return comps;
    }
    console.log("Upload Companies collection");
    const comps = await getCompany();
    console.log("Finish Upload Companies collection");
    console.log("Upload Films Data");
    for (const val of data) {
        const preFilm = await FilmDB.findOne({ name: val.name });
        if (!preFilm) {
            const comp = comps.find((comp) => comp.name == val.company);
            if (!comp)
                throw new Error(
                    `Company name is not exist ${val.company} ${comp}`
                );
            val.company = comp?.id;
            changeFilmData(val);
            const newFilm = new FilmDB(val);
            await newFilm.save();
        }
    }
    console.log("Finish Upload Films Data");
}

const pages: Record<string, string[]> = {
    home: [
        "New to Disney+",
        "What to Watch Tonight",
        "Popular Shows",
        "Popular Movies",
        "Movies Recommended For You",
        "Awards movies",
        "Science Fiction",
        "Fantasy Movies",
        "Recently watched",
        "Classic Movies",
    ],
    series: [
        "Comedy Series",
        "Drama Series",
        "Science Fiction",
        "Adult Animation",
        "Horror",
        "Documentaries and Reality",
    ],
    movies: [
        "Action and Adventure",
        "Comedy Movies",
        "Drama Movies",
        "Romantic Movies",
        "Animated Movies",
        "Science Fiction",
        "Horror",
        "Stories Matter",
    ],
    originals: ["Series", "Movies", "Shorts", "Specials"],
};
async function UploadPagesData() {
    console.log("Uploading pageData editions");
    const films = await FilmDB.find({});
    for (const name in pages) {
        console.log(" ", `Upload ${name}`);
        const res = await EditTitlesDB.findOne({ name });
        if (res) continue;
        const editions: mongoose.Types.ObjectId[] = new Array();
        for (const titleName of pages[name]) {
            const res = await new EditionDB({
                name: titleName,
                films: getRandomValues(films, 60, false).map(({ _id }) => _id),
            }).save();
            editions.push(res._id);
        }
        await new EditTitlesDB({ name, editions }).save();
        console.log(`Finish Upload ${name}`);
    }
    console.log("Finish Uploading Home editions");
}
async function UploadCompanyEditions() {
    console.log("Uploading Company editions");
    const companies = await CompanyDB.find({});
    for (const company of companies) {
        console.log(" ", "Upload", company.name, "edition");
        const res = await EditTitlesDB.findOne({ name: company.name });
        if (res) continue;
        const films = await FilmDB.find({ company: company._id }).hint({
            company: 1,
        });
        const editions: mongoose.Types.ObjectId[] = new Array();
        for (const name of FilmsEditionsName(company.name)) {
            const res = await new EditionDB({
                name,
                films: getRandomValues(
                    films,
                    Math.min(60, films.length),
                    false
                ).map(({ _id }) => _id),
            }).save();
            editions.push(res._id);
        }
        await new EditTitlesDB({ name: company.name, editions }).save();
        console.log("   ", "Finish Upload", company.name, " edition");
    }
    console.log("Finish Uploading Company editions");
}

(async function () {
    await connect(EnvVars.MONGODB_URL, true);
    await UploadData();
    await UploadPagesData();
    await UploadCompanyEditions();
    await mongoose.disconnect();
    console.log("success uploading data");
})();

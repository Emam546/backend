import { v4 as uuidV4 } from "uuid";
import fs from "fs-extra";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import EnvVars from "@src/declarations/major/EnvVars";
import { NodeEnvs } from "@src/declarations/enums";

const FilePath = path.join(__dirname, "../images");
if (!fs.existsSync(FilePath)) fs.mkdirsSync(FilePath);
export async function Copy(name: string) {
    const orgFile = path.join(__dirname, name);

    if (EnvVars.nodeEnv == NodeEnvs.Production) {
        console.log(name);
        const res = await cloudinary.uploader.upload(orgFile,{resource_type:"auto"});
        return res.public_id;
    } else {
        const filename = `${uuidV4()}${path.extname(name)}`;
        await fs.copy(orgFile, path.join(FilePath, filename));
        return filename
    }
}
export async function changeFilmData(val: Film) {
    try {
        val.thumbnails.head = await Copy(val.thumbnails.head);
        val.thumbnails.landscape = await Copy(val.thumbnails.landscape);
        val.thumbnails.portal = await Copy(val.thumbnails.portal);
        if (val.thumbnails.headPortal)
            val.thumbnails.headPortal = await Copy(val.thumbnails.headPortal);
    } catch (err) {
        await Delete(val.thumbnails.head);
        await Delete(val.thumbnails.landscape);
        await Delete(val.thumbnails.portal);
        if (val.thumbnails.headPortal) await Delete(val.thumbnails.headPortal);
        console.log(err);
        throw err;
    }
}
export async function Delete(id: string) {
    if (EnvVars.nodeEnv == NodeEnvs.Production) {
        try {
            await cloudinary.api.resource(id);
            await cloudinary.uploader.destroy(id);
        } catch (error) {}
    } else if (fs.existsSync(id)) fs.removeSync(id);
}
export async function changeCompData(val: Company) {
    try {
        val.thumbnail.home.image = await Copy(val.thumbnail.home.image);
        val.thumbnail.home.video = await Copy(val.thumbnail.home.video);
        val.thumbnail.main.bg = await Copy(val.thumbnail.main.bg);
        if (val.thumbnail.main.image)
            val.thumbnail.main.image = await Copy(val.thumbnail.main.image);
    } catch (err) {
        await Delete(val.thumbnail.home.image);
        await Delete(val.thumbnail.home.video);
        await Delete(val.thumbnail.main.bg);
        if (val.thumbnail.main.image) await Delete(val.thumbnail.main.image);
        console.log(err);
        throw err;
    }
}

export function getRandomNum(num: number) {
    return Math.floor(num * Math.random());
}
export function getRandomValue<T>(arr: Array<T>): T {
    return arr[getRandomNum(arr.length)];
}
export function getRandomValues<T>(
    arr: T[],
    num = arr.length,
    random = true
): T[] {
    const res: T[] = new Array();
    for (let i = 0; i < (random ? getRandomNum(num) : num); i++) {
        // to avoid repeating
        let larr = getRandomValue(arr);

        while (larr == res.at(-1)) larr = getRandomValue(arr);

        res.push(larr);
    }
    return res;
}

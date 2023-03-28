import { v4 as uuidV4 } from "uuid";
import fs from "fs-extra";
import path from "path";
const FilePath = path.join(__dirname, "../images");
if (!fs.existsSync(FilePath)) fs.mkdirsSync(FilePath);
export function Copy(name: string) {
    const filename = `${uuidV4()}${path.extname(name)}`;
    fs.copyFileSync(path.join(__dirname, name), path.join(FilePath, filename));
    return filename;
}
export function changeFilmData(val: Film) {
    try {
        val.thumbnails.head = Copy(val.thumbnails.head);
        val.thumbnails.landscape = Copy(val.thumbnails.landscape);
        val.thumbnails.portal = Copy(val.thumbnails.portal);
        if (val.thumbnails.headPortal)
            val.thumbnails.headPortal = Copy(val.thumbnails.headPortal);
    } catch (err) {
        Delete(val.thumbnails.head);
        Delete(val.thumbnails.landscape);
        Delete(val.thumbnails.portal);
        if (val.thumbnails.headPortal) Delete(val.thumbnails.headPortal);
        console.log(err);
        throw err;
    }
}
export function Delete(name: string) {
    if (fs.existsSync(name)) fs.removeSync(name);
}
export function changeCompData(val: Company) {
    try {
        val.thumbnail.home.image = Copy(val.thumbnail.home.image);
        val.thumbnail.home.video = Copy(val.thumbnail.home.video);
        val.thumbnail.main.bg = Copy(val.thumbnail.main.bg);
        if (val.thumbnail.main.image)
            val.thumbnail.main.image = Copy(val.thumbnail.main.image);
    } catch (err) {
        Delete(val.thumbnail.home.image);
        Delete(val.thumbnail.home.video);
        Delete(val.thumbnail.main.bg);
        if (val.thumbnail.main.image) Delete(val.thumbnail.main.image);
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

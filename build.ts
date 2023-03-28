/**
 * Remove old files, copy front-end ones.
 */

import fs from "fs-extra";
import childProcess from "child_process";

/**
 * Start
 */
(async () => {
    try {
        // Remove current build
        remove("./dist/");
        // Copy front-end files
        copy("./src/public", "./dist/public");
        copy("./src/views", "./dist/views");
        // Copy back-end files
        await exec("tsc --build tsconfig.prod.json", "./");
    } catch (err) {
        console.error(err);
    }
})();

/**
 * Remove file
 */
function remove(loc: string) {
    if (fs.existsSync(loc)) fs.removeSync(loc);
}

/**
 * Copy file.
 */
function copy(src: string, dest: string) {
    if (fs.existsSync(src) && fs.existsSync(dest)) fs.copyFileSync(src, dest);
}

/**
 * Do command line command.
 */
function exec(cmd: string, loc: string): Promise<void> {
    return new Promise((res, rej) => {
        return childProcess.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
            if (!!stdout) {
                console.info(stdout);
            }
            if (!!stderr) {
                console.warn(stderr);
            }
            return !!err ? rej(err) : res();
        });
    });
}

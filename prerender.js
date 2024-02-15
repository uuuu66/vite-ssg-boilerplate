import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const render = (await import("./dist/server/entry-server.js")).SSRRender;

const readFileAndMakeUrls = (path, dir, dirs) => {
  const urls = [];
  const readDirAndFile = (path, dir, dirs) => {
    fs.readdirSync(toAbsolute(`${path}/${dir || ""}`), {
      withFileTypes: true,
    }).forEach((file) => {
      const name = file.name.replace(/\.tsx$/, "").toLowerCase();
      if (file.isDirectory()) {
        readDirAndFile(`${path}/${dir || ""}`, `${file.name}`, [
          ...dirs,
          dir?.toLowerCase() || "",
        ]);
      } else
        urls.push(
          `${dirs.join("/")}${dirs.length > 0 ? "/" : ""}${
            dir?.toLowerCase() || ""
          }/${name}`
        );
    });
  };
  readDirAndFile(path, dir, []);
  return urls;
};
const routesToPrerender = readFileAndMakeUrls("src/pages", null);
(async () => {
  for (let url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml);
    let paths = url.split("/");
    const lastPath = paths[paths.length - 1];
    if (lastPath === "index") {
      const dirPath = paths.splice(0, paths.length - 1).join("/");
      const isExists = fs.existsSync(`dist/static/${dirPath}`);
      if (!isExists) {
        fs.mkdirSync(`dist/static/${dirPath}`, { recursive: true });
      }
      url = "/" + dirPath + "/index";
    }
    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
  }
})();

import sharp from "sharp";
import path from "path";
import https from "https";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../public/images");
const outPath = path.join(root, "hero/slide-3.jpg");

const url = process.argv[2];

function download(dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", reject);
  });
}

let input = process.argv[2]
  ? path.join(root, "../.tmp-hero.png")
  : outPath;

if (url?.startsWith("http")) {
  await download(input);
} else if (!url) {
  input = outPath;
}

await sharp(input)
  .rotate()
  .resize(3840, 2160, { fit: "cover", position: "center", kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 0.8, m1: 1.0, m2: 0.5 })
  .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(`${outPath}.tmp`);

const meta = await sharp(`${outPath}.tmp`).metadata();
fs.renameSync(`${outPath}.tmp`, outPath);
console.log(`hero/slide-3.jpg ${meta.width}x${meta.height}`);

if (url?.startsWith("http")) fs.unlinkSync(input);

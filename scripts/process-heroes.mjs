import sharp from "sharp";
import path from "path";
import https from "https";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../public/images");

const jobs = [
  {
    url: "https://tempfile.aiquickdraw.com/workers/nano/image_1782524885852_0sgh7f.png",
    out: "hero/slide-3.jpg",
  },
  {
    url: "https://tempfile.aiquickdraw.com/workers/nano/image_1782524890030_23in9l.png",
    out: "page-heroes/our-work-commercial.jpg",
  },
  {
    url: "https://tempfile.aiquickdraw.com/workers/nano/image_1782524888288_pn9ivl.png",
    out: "page-heroes/our-work-before-after.jpg",
  },
  { local: "gallery/01.jpg", out: "page-heroes/our-work-residential.jpg" },
];

function download(url, dest) {
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

async function processImage(srcPath, outPath) {
  await sharp(srcPath)
    .resize(2400, 1350, { fit: "cover", position: "center" })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  console.log(`${path.relative(root, outPath)} ${meta.width}x${meta.height}`);
}

for (const job of jobs) {
  const outPath = path.join(root, job.out);
  if (job.url) {
    const tmp = `${outPath}.png`;
    await download(job.url, tmp);
    await processImage(tmp, outPath);
    fs.unlinkSync(tmp);
  } else {
    await processImage(path.join(root, job.local), outPath);
  }
}

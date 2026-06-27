/**
 * One-off script: poll kie.AI task IDs and download completed hero images.
 * Run: node scripts/download-hero-images.mjs
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/images/page-heroes");

/** taskId -> output filename */
const TASKS = {
  ef53f7c17d71e8b24f4943bc3a6dc272: "services.jpg",
  "7db74406b9be9e5b4e758f8bf576b6ff": "residential-epoxy-flooring.jpg",
  cef165aa818550ab320e7962cb2a5a73: "commercial-epoxy-flooring.jpg",
  aa0705f1d25d2248b1e138d97cc104e7: "anti-slip-coating.jpg",
  e210efb2fbfc28f032090ec96eaed9b6: "metallic-epoxy-flooring.jpg",
  fad47324754553d115bf4ebd14271452: "flake-chip-epoxy-flooring.jpg",
  d35db6517d287e5fe1dca03c77dbe84b: "quartz-epoxy-flooring.jpg",
  c0eb3b49f23f1b5895d569e707e91123: "solid-color-epoxy-flooring.jpg",
  b62874afd33fcad683150936e017a1c7: "marble-epoxy-flooring.jpg",
  "2f4a06153ba66cfa51abe17039e192d0": "locations.jpg",
  cb13ed842f7c9a10b5b7a041963b3959: "cedar-rapids.jpg",
  f58bad06ed0b78d9ccc9fe6d18869902: "iowa-city.jpg",
  b06d3d4ee27276330b3f78c7c6d4423a: "dubuque.jpg",
  f6491d30f57d10e131285d9d76f75fa5: "waterloo.jpg",
  "59c71e4ca67e1c224981226b9e74568c": "cedar-falls.jpg",
  "5c979c86e362b38c359be46e084e37f2": "davenport.jpg",
  "08ac08620230c1301fd31a6387a690ae": "des-moines.jpg",
  "65d1eebe9c98f051038cf7906a9c7b8f": "sioux-city.jpg",
  "5a99e359af90c5965a0877c0d43c3625": "our-work.jpg",
  "9898777f31977ab136c7eb2a96ab6913": "our-work-residential.jpg",
  "1c8faea00647cd3a53772f0ab20c23aa": "our-work-commercial.jpg",
  "512d8b4c151554fe7864f4afc01850b3": "our-work-before-after.jpg",
};

const KIE_API = process.env.KIE_API_URL ?? "https://api.kie.ai/api/v1/jobs/recordInfo";

async function getTaskUrl(taskId) {
  const res = await fetch(`${KIE_API}?taskId=${taskId}`, {
    headers: { Authorization: `Bearer ${process.env.KIE_API_KEY ?? ""}` },
  });
  if (!res.ok) return null;
  const json = await res.json();
  const resultJson = json?.data?.resultJson;
  if (!resultJson) return null;
  try {
    const parsed = JSON.parse(resultJson);
    return parsed.resultUrls?.[0] ?? null;
  } catch {
    return null;
  }
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const pending = { ...TASKS };
  let attempts = 0;
  const maxAttempts = 40;

  while (Object.keys(pending).length > 0 && attempts < maxAttempts) {
    attempts++;
    for (const [taskId, filename] of Object.entries({ ...pending })) {
      const url = await getTaskUrl(taskId);
      if (!url) {
        console.log(`⏳ ${filename} — still pending`);
        continue;
      }
      const dest = path.join(OUT_DIR, filename);
      await download(url, dest);
      console.log(`✓ ${filename}`);
      delete pending[taskId];
    }
    if (Object.keys(pending).length > 0) {
      await new Promise((r) => setTimeout(r, 5000));
    }
  }

  if (Object.keys(pending).length > 0) {
    console.error("Timed out waiting for:", Object.values(pending));
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

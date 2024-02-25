import path, { resolve } from "path";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

import { WorksKey } from "./constants";

export async function getBlurData(worksKey: WorksKey) {
  const staticFilePath = `./public/images/thumbnails/${worksKey}.jpg`;
  const fullPath = resolve(staticFilePath);

  const file = await fs.readFile(fullPath);

  const { base64 } = await getPlaiceholder(file);

  return base64;
}

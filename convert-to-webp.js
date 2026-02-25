import sharp from "sharp";
import { glob } from "glob";
import fs from "fs-extra";
import path from "path";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png"];

async function convertImages() {
  const files = await glob("src/**/*.{jpg,jpeg,png}");

  console.log(`Found ${files.length} images`);

  for (const file of files) {
    const ext = path.extname(file);
    const output = file.replace(ext, ".webp");

    try {
      await sharp(file)
        .webp({ quality: 80 })
        .toFile(output);

      console.log(`Converted: ${file} → ${output}`);
    } catch (err) {
      console.log(`Failed: ${file}`);
    }
  }

  console.log("✅ All images converted to WebP");
}

convertImages();
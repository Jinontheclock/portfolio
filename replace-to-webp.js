import { glob } from "glob";
import fs from "fs";

async function replaceImports() {
  const files = await glob("src/**/*.{js,jsx,ts,tsx}");

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");

    const updated = content
      .replace(/\.jpg/g, ".webp")
      .replace(/\.jpeg/g, ".webp")
      .replace(/\.png/g, ".webp");

    fs.writeFileSync(file, updated);
    console.log(`Updated: ${file}`);
  }

  console.log("✅ All image references updated");
}

replaceImports();
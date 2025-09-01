import fs from "fs";
import path from "path";
import JavaScriptObfuscator from "javascript-obfuscator";

const outDir = path.join(process.cwd(), ".next", "static", "chunks"); // Next.js output folder

function obfuscateFile(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    deadCodeInjection: true,
    stringArray: true,
    stringArrayEncoding: ["rc4"],
    stringArrayThreshold: 0.75
  }).getObfuscatedCode();

  fs.writeFileSync(filePath, obfuscatedCode, "utf8");
  console.log("✅ Obfuscated:", filePath);
}

// Loop through chunk files
fs.readdirSync(outDir).forEach((file) => {
  if (file.endsWith(".js")) {
    obfuscateFile(path.join(outDir, file));
  }
});

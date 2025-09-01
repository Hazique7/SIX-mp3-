// obfuscate.js
import fs from "fs";
import path from "path";
import JavaScriptObfuscator from "javascript-obfuscator";

const componentsDir = "./app/components";

function obfuscateFile(filePath) {
  const code = fs.readFileSync(filePath, "utf8");

  // Backup clean version (only once)
  const backupPath = filePath.replace(/\.js$/, ".backup.js");
  if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, code);
  }

  const obfuscated = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    deadCodeInjection: true,
    stringArray: true,
    stringArrayEncoding: ["base64"],
    stringArrayThreshold: 0.75,
  }).getObfuscatedCode();

  fs.writeFileSync(filePath, obfuscated, "utf8");
  console.log(`✅ Obfuscated: ${filePath}`);
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      traverseDir(fullPath);
    } else if (file.endsWith(".js")) {
      obfuscateFile(fullPath);
    }
  });
}

if (process.env.VERCEL_ENV === "production") {
  console.log("🔒 Production build detected → obfuscating all component .js files...");
  traverseDir(componentsDir);
  console.log("🎉 All .js files obfuscated!");
} else {
  console.log("💻 Dev build → skipping obfuscation.");
}

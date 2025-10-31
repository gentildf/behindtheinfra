import { build } from "vite";
import path from "node:path";

async function run() {
  const configPath = path.resolve(__dirname, "../config/vite.config.ts");
  await build({ configFile: configPath });
}

run().catch((error) => {
  console.error("Build failed:", error);
  process.exitCode = 1;
});


const { execSync } = require("child_process");

const [, , folder, num] = process.argv;

if (!folder || !num) {
  console.log("Usage: npm run p <folder> <number>");
  process.exit(1);
}

const path = `src/${folder}/problem-${num}/solution.ts`;

console.log(`Running: ${path}`);

execSync(`npx ts-node ${path}`, { stdio: "inherit" });
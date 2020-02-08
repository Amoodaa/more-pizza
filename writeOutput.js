const { writeFileSync, mkdirSync, existsSync } = require("fs");
const { join, resolve } = require("path");

module.exports = output => {
  if (!existsSync(join(__dirname, "output"))) mkdirSync("output");
  writeFileSync(
    join(__dirname, "output", `${process.argv[2].split("_")[0]}.out`),
    output
  );
};

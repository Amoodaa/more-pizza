const readline = require("readline");
const { createReadStream } = require("fs");
const path = require("path");

module.exports = (filename, callback) => {
  const readInterface = readline.createInterface({
    input: createReadStream(filename)
  });
  let input = { maxSlices: 0, typesOfPizzas: 0, pizzaTypesSlices: [0, 0, 0] };
  readInterface.once("line", line => {
    const [maxSlices, typesOfPizzas] = line.split(" ").map(Number);
    input = { maxSlices, typesOfPizzas };
    readInterface.once("line", line => {
      input.pizzaTypesSlices = line.split(" ").map(Number);
      callback(input);
    });
  });
};

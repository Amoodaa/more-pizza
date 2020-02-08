const read = require("./extractData");
const writeSol = require("./writeOutput");

const callback = ({ maxSlices, typesOfPizzas, pizzaTypesSlices }) => {
  console.log({ maxSlices, typesOfPizzas, pizzaTypesSlices });
  let differentPizzaTypesToOrder = 0,
    indecesOfTypesOfPizzasToOrder = [];

  writeSol(`${differentPizzaTypesToOrder}
  ${indecesOfTypesOfPizzasToOrder.join(" ")}`);
};

read(process.argv[2], callback);

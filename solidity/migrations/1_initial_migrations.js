
const Batchmint = artifacts.require("Batchmint");

//TODO: Agregar los parametros correspondientes que solicita el constructor
module.exports = function (deployer) {
  deployer.deploy(Election);
};
import { programExecution } from "./instructionsFun.js";

const start = () => {
  const input = prompt("Enter the sprint program:");
  const program = input.split(" ").map(number => +number);

  programExecution(program);
};

start();
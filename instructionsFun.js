const jump = (program, cell) => {
  return program[cell] - 1;
};

const hault = () => {
  console.log("Hault...");
  return -1;
};

const copy = (program, cell) => {
  const firstIndex = program[cell] - 1;
  const secondIndex = program[cell + 1] - 1;
  program[secondIndex] = program[firstIndex];

  return cell + 2;
};

const equal = (program, cell) => {
  const firstIndex = program[cell] - 1;
  const secondIndex = program[cell + 1] - 1;
  const isEqual = program[firstIndex] === program[secondIndex];

  return isEqual ? program[cell + 2] - 1 : cell + 3;
};

const lessThan = (program, cell) => {
  const firstIndex = program[cell] - 1;
  const secondIndex = program[cell + 1] - 1;
  const isLessThan = program[firstIndex] < program[secondIndex];

  return isLessThan ? program[cell + 2] - 1 : cell + 3;
};

const add = (program, cell) => {
  const firstIndex = program[cell] - 1;
  const secondIndex = program[cell + 1] - 1;
  const resultIndex = program[cell + 2] - 1;
  program[resultIndex] = program[firstIndex] + program[secondIndex];

  return cell + 3;
};

const sub = (program, cell) => {
  const firstIndex = program[cell] - 1;
  const secondIndex = program[cell + 1] - 1;
  const resultIndex = program[cell + 2] - 1;
  program[resultIndex] = program[firstIndex] - program[secondIndex];

  return cell + 3;
};

const invalid = (program, cell) => {
  console.log("Invalid instruction :", program[cell]);
  return -1;
};

const instructionExecution = (program, index) => {
  switch (program[index]) {
    case 3:
      return jump(program, index + 1);
    case 9:
      return hault();
    case 7:
      return copy(program, index + 1);
    case 4:
      return equal(program, index + 1);
    case 5:
      return lessThan(program, index + 1);
    case 1:
      return add(program, index + 1);
    case 2:
      return sub(program, index + 1);
    default:
      return invalid(program, index);
  }
};

const display = (program) => {
  const programObject = program
    .reduce((object, value, index) => ({ ...object, [index + 1]: value }), {});

  console.table({ programObject });
};

export const programExecution = (program) => {
  let index = 0;

  while (index < program.length) {
    index = instructionExecution(program, index);

    if (index < 0) return;

    display(program);
  }
};
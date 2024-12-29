const jump = (program, cell) => {
  return program[cell] - 1;
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

const lessThan = (arr, cell) => {
  const firstIndex = arr[cell] - 1;
  const secondIndex = arr[cell + 1] - 1;
  const isLessThan = arr[firstIndex] < arr[secondIndex];

  return isLessThan ? program[cell + 2] - 1 : cell + 3;
};

const add = (program, index) => {
  const firstIndex = program[index] - 1;
  const secondIndex = program[index + 1] - 1;
  const resultIndex = program[index + 2] - 1;
  program[resultIndex] = program[firstIndex] + program[secondIndex];


  return index + 3;
};

const sub = (addSubArr, addSubCell) => {
  const isSubtract = addSubArr[addSubCell] === 2;
  addSubCell++;
  const firstNumberAddress = addSubArr[addSubCell] - 1;
  addSubCell++;
  const secondNumberAddress = addSubArr[addSubCell] - 1;
  addSubCell++;
  const resultStoringAddress = addSubArr[addSubCell] - 1;

  if (isSubtract) {
    addSubArr[resultStoringAddress] = addSubArr[firstNumberAddress] - addSubArr[secondNumberAddress];
  } else {
    addSubArr[resultStoringAddress] = addSubArr[firstNumberAddress] + addSubArr[secondNumberAddress];
  }

  addSubCell++;
  return { addSubArr, addSubCell };
};

const instructionExecution = (program, index) => {
  switch (program[index]) {
    case 3:
      return jump(program, index + 1);
    case 9:
      return -1;
    case 7:
      return copy(program, index + 1);
    case 4:
      return equal(program, index + 1);
    case 5:
      return lessThan(program, index + 1);
    case 1:
      return add(program, index + 1);
    case 2: {
      let { addSubArr, addSubCell } = sub(program, index);
      program = addSubArr;
      index = addSubCell - 1;
      return;
    }
    default:
      console.log("Invalid instruction :", program[index]);
      return;
  }
};


const display = (list) => {
  console.log(list);
};


const programExecution = (program) => {
  let index = 0;

  while (index < program.length) {
    index = instructionExecution(program, index);

    if (index < 0) {
      console.log("Hault...");
      return;
    };

    display(program);
  }
};

const start = () => {
  const input = prompt("Enter the sprint program:");
  const program = input.split(" ").map(number => +number);

  programExecution(program);
};

start();
const jumpInstruction = function (arr, cell) {
  cell = cell + 1;
  cell = arr[cell] - 1;
  return cell;
};

const copyInstruction = function (arr, cell) {
  cell++;
  const firstAddress = arr[cell] - 1;
  cell++;
  const secondAddress = arr[cell] - 1;
  arr[secondAddress] = arr[firstAddress];
  cell++;
  return [arr, cell];
};

const equalAndLessThanInstruction = (arr, cell) => {
  let isLessThan = false;
  if (arr[cell] === 5) {
    isLessThan = true;
  }

  cell++;
  const firstNumAddress = arr[cell] - 1;
  cell++;
  const secondNumAddress = arr[cell] - 1;
  cell++;

  const addressAtConditionMatch = arr[cell] - 1;
  let isConditionMatch = arr[firstNumAddress] === arr[secondNumAddress];

  if (isLessThan) {
    isConditionMatch = arr[firstNumAddress] < arr[secondNumAddress];
  }

  cell++;
  if (isConditionMatch) {
    cell = addressAtConditionMatch;
  }

  return cell;
};

const addAndSubtractInstruction = (addSubArr, addSubCell) => {
  let isSubtract = addSubArr[addSubCell] === 2;
  addSubCell++;
  let firstNumberAddress = addSubArr[addSubCell] - 1;
  addSubCell++;
  let secondNumberAddress = addSubArr[addSubCell] - 1;
  addSubCell++;
  let resultStoringAddress = addSubArr[addSubCell] - 1;
  if (isSubtract) {
    addSubArr[resultStoringAddress] = addSubArr[firstNumberAddress] - addSubArr[secondNumberAddress];
  } else {
    addSubArr[resultStoringAddress] = addSubArr[firstNumberAddress] + addSubArr[secondNumberAddress];
  }
  addSubCell++;
  return { addSubArr, addSubCell };
};

const intputProgram = '3 3 1 6 17 17 2 2 3 3 7 17 18 4 17 18 19 9 0 0';
console.log(intputProgram);

const inputValueArray = intputProgram.split(" ").map(Number);

let loopExiterForStop = false;

for (let cellNumber = 0; cellNumber <= inputValueArray.length && !loopExiterForStop; cellNumber++) {
  switch (inputValueArray[cellNumber]) {
    case 3:
      cellNumber = jumpInstruction(inputValueArray, cellNumber) - 1;
      break;
    case 9:
      loopExiterForStop = true;
      console.log("hault");
      break;
    case 7:
      const [arr, cell] = copyInstruction(inputValueArray, cellNumber);
      cellNumber = cell - 1;
      inputValueArray = arr;
      break;
    case 4:
      cellNumber = equalAndLessThanInstruction(inputValueArray, cellNumber) - 1;
      break;
    case 5:
      cellNumber = equalAndLessThanInstruction(inputValueArray, cellNumber) - 1;
      break;
    case 1:
      let { addSubArr, addSubCell } = addAndSubtractInstruction(inputValueArray, cellNumber);
      inputValueArray = addSubArr;
      cellNumber = addSubCell - 1;
      break;
    case 2: {
      let { addSubArr, addSubCell } = addAndSubtractInstruction(inputValueArray, cellNumber);
      inputValueArray = addSubArr;
      cellNumber = addSubCell - 1;
      break;
    }
    default:
      console.log(`Invalid instruction : ${inputValueArray[cellNumber]}`);
      break;
  }

  if (loopExiterForStop) break;
  console.log(inputValueArray);
}
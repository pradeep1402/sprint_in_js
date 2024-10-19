import { jumpInstruction, copyInstruction, equalAndLessThanInstruction, addAndSubtractInstruction } from "./instructionFn.js";

const intputProgram = `3 3 1 6 17 17 2 2 3 3 7 17 18 4 17 18 19 9 0 0`;
console.log("Hello guys, this is pradeep and this is small version of sprint and if you want to add your sprint program you can add to above variable name inputProgram in sprint.js code file. Thank you for reviewing my code.")
console.log(intputProgram);

let inputValueArray = intputProgram.split(" ").map(Number);

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
            const { arr, cell } = copyInstruction(inputValueArray, cellNumber);
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
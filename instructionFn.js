const jumpInstruction = (arr, cell) => {
    cell = cell + 1;
    cell = arr[cell] - 1;
    return cell;
}

const copyInstruction = (arr, cell) => {
    cell++;
    let firstNumberAddress = arr[cell] - 1;
    cell++;
    let secondNumberAddress = arr[cell] - 1;
    arr[secondNumberAddress] = arr[firstNumberAddress];
    cell++;
    return { arr, cell }
}

const equalAndLessThanInstruction = (arr, cell) => {
    let isLessThan = false;
    if (arr[cell] === 5) {
        isLessThan = true;
    }
    cell++;
    let firstNumberAddress = arr[cell] - 1;
    cell++;
    let secondNumberAddress = arr[cell] - 1;
    cell++;
    let trueAddress = arr[cell] - 1;
    let isTrue = arr[firstNumberAddress] === arr[secondNumberAddress];
    if (isLessThan) {
        isTrue = arr[firstNumberAddress] < arr[secondNumberAddress];
    }
    cell++;
    if (isTrue) {
        cell = trueAddress;
    }
    return cell;
}

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
    return { addSubArr, addSubCell }
}

export { jumpInstruction, copyInstruction, equalAndLessThanInstruction, addAndSubtractInstruction }
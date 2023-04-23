
// pushFront
const pushFront = (array1, number) => {
  return [number, ...array1];
};


// popFront
const popFront = (numberArray) => {
  const firstElement = numberArray[0];
  for (let i = 0; i < numberArray.length - 1; i++) {
    numberArray[i] = numberArray[i + 1];
  }
  numberArray.length--;

  console.log(
    `${firstElement} returned, with [${numberArray}] printed in the function`
  );
  return firstElement;
};


// insertAt
const insertAt = (arr, index, value) => {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
};

// removeAt
const removeAt = (arr, index) => {
  const removedValue = arr.splice(index, 1)[0];
  console.log(arr);
  return removedValue;
};


// swapPairsArray

const swapPairsArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
};

// removeDupes
const removeDupes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] === arr[i + 1]) {
      removeAt(arr, i + 1);
    }
  }
  return arr;
}

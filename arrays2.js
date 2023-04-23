// reverse
const reverse = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

// rotate Array
const reverseForRotate = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const rotateArr = (arr, shiftBy) => {
  const len = arr.length;
  const shift = shiftBy % len;
  if (shift < 0) {
    shift += len;
  }
  if (shift === 0) {
    return arr;
  }
  reverseForRotate(arr, 0, len - 1);
  reverseForRotate(arr, 0, shift - 1);
  reverseForRotate(arr, shift, len - 1);
};


// filterRange
const filterRange = (arr, min, max) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < min || arr[i] > max) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};


// arrConcat
const arrConcat = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    result.push(arr2[j]);
  }
  return result;
};

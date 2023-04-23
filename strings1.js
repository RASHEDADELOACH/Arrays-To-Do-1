// removeBlanks
const removeBlanks = (str) => {
  return str.replace(/\s+/g, "");
};
// output
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));



// getDigits
const getDigits = (str) => {
  let digits = "";

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      digits += str[i];
    }
  }

  return Number(digits);
};
// output
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));
console.log(getDigits("abc8c0d1ngd0j0!8"));



// acronym
const acronym = (str) => {
  let words = str.split(" ");
  let acronymArr = words.map((word) => word.slice(0, 1).toUpperCase());
  return acronymArr.join("");
};
// output
console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));



// countNonSpaces
const countNonSpaces = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }
  return count;
};
// output
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));



// removeShorterStrings
const removeShorterStrings = (arr, len) => {
  return arr.filter((str) => str.length >= len);
};
// output
console.log(
  removeShorterStrings(
    ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
    4
  )
);
console.log(
  removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3)
);

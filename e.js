const crypto = require("crypto");

const hash = "76949a35477f8b8f5e35c50d3006c01dbc4515bb744d88f0b636bc5f2fc20756";

const allLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index1 = 0; index1 < allLetters.length; index1++) {
  for (let index2 = 0; index2 < allLetters.length; index2++) {
    for (let index3 = 0; index3 < allLetters.length; index3++) {
      let a1 = allLetters[index1];
      let a2 = allLetters[index2];
      let a3 = allLetters[index3];
      const string = `https://link.layers.education/w${a1}cc${a2}9x${a3}`;
      const hashed = crypto.createHash("sha256").update(string).digest("hex");
      if (hashed === hash) {
        console.log("FOUND!! : ", string);
        break;
      }
    }
  }
}
console.log('All letters failed!');
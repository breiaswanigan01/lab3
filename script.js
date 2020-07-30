"use strict";
//1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020 - 01 - 24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018 - 05 - 14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019 - 07 - 05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020 - 04 - 22",
    passed: true,
  },
];

//2

const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
addSubmission(submissions, "Breia", 45, "2019 - 01 - 07");

console.log(submissions);

// //.PUSH() adding to ENDING of array
// // let numbers = [1, 2, 3];
// // numbers.push(4)
// // console.log(numbers);
// //UNSHIFT() adding to BEGINNING of array
// // numbers.unshift(9);
// // console.log(numbers);

// //EXAMPLE OF UNSHIFT IN FUNCTION
// const addStringToBeginning = (array, string) => {
//     array.unshift(string);
// };
// addStringToBeginning(strings, "Ann Arbor");
// console.log(strings);

//3
const deteleSubmissionByIndezx = (array, index) => {
  array.splice(index, 1);
};

//4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((person) => {
    return person.name === name;
  });
  array.splice(index, 1);
};

deleteSubmissionByName(submissions, "Jane");
console.log(submissions);

//5
const editSubmission = (array, index, updatedScore) => {
  let passed = null;
  if (updatedScore >= 60) {
    passed = true;
  } else {
    passed = false;
  }
  array[index].score = updatedScore;
  array[index].passed = passed;
};
editSubmission(submissions, 1, 98);
console.log(submissions);
// 6
const findSubmissionByName = (array, name) => {
  let findSub = array.find((item) => {
    return item.name === name;
  });
  return findSub;
};
console.log(findSubmissionByName(submissions, "Breia"));

// 7
const findLowestScore = (array) => {
  let lowestScore = null;
  submissions.forEach((submission) => {
    lowestScore = submission.score;
  });
  return lowestScore;
};
console.log(findLowestScore(submissions.score));

//MITCH'S CODE FOR 7
// const findLowestScore = (array) => {
//     let currentLowest = array[0];
//     array.forEach((currentObj) => {
// if(currentObj.score < currentLowest.score) {
//     currentLowest = currentObj;
// }
// });
// return currentLowest;
// }

//8
const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};
console.log(findAverageScore(submissions));

// 9
const filterPassing = (array) => {
  let filteredArray = array.filter((scores) => {
    return scores.passed === true;
  });
  return filteredArray;
};
console.log(filterPassing(submissions));

//10
const filter90AndAbove = (array) => {
  let filterArray = array.filter((scores2) => {
    return scores2.score >= 90;
  });
  return filterArray;
};
console.log(filter90AndAbove(submissions));

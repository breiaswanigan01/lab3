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

//3
const deteleSubmissionByIndezx = (array, index) => {
  array.splice(index, 1);
};

//4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((student) => {
    return student.name === name;
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

//8
const findAverageScore = (array) => {
  for (let score of findAverageScore) {
  }
};

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

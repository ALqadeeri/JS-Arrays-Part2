//Task 1
function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 !== 0) return true;
  return false;
}
console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));

//Task 2
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 == 0) return true;
  return false;
}
console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4]));

//Task 3
function addLailaToArray(instructors) {
  let newList = instructors.slice();
  newList.push("Laila");
  console.log(instructors);
  return newList;
}
console.log(addLailaToArray(["Mshary", "Hasan"]));

//Task 4
function eliminateTeam(teams) {
  let removeElement = teams.pop();
  return removeElement;
}
console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

//CHALLENGE 1
function secondHalfOfArrayIfItIsEven(fruits) {
  if (isArrayLengthEven(fruits)) {
    let newArray = fruits.slice(fruits.length / 2);
    return newArray;
  }
  return [];
}
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
console.log(
  secondHalfOfArrayIfItIsEven([
    "apple",
    "orange",
    "banana",
    "kiwi",
    "blueberry",
  ])
);

//CHALLENGE 2
function youGottaCalmDown(shout) {
  if (shout.includes("!")) {
    const waleed = shout.indexOf("!");
    shout = shout.slice(0, waleed + 1);
  }

  return shout;
}
console.log(youGottaCalmDown("Hellooooo"));

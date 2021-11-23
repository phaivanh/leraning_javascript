// spared operator on array
const Tab = [10, 20, 30];
const Tab2 = [1, 2, 3, ...Tab];
console.log(Tab2);

// spared operator on Object
const Obj1 = {
  Name: "John",
  Age: 25
};
console.log(Obj1);

const Obj2 = {
  ...Obj1,
  gender: "male"
};
console.log(Obj2);

// REST operator

const filter = (...params) => {
  return params.filter((e, i) => checkLimit(e, i));
};

function checkLimit(nb, i) {
  return nb > 18 && i >= 1;
}

console.log("filter => " + filter(5, 19, "paul", 33));

// syntaxe 2
const filter2 = (...params) => {
  return params.filter((e, i) => e > 1 && i >= 1);
};

console.log("filter2 => " + filter2(5, 18, "paul", 33));

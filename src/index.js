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

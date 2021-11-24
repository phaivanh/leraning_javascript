// SPREAD OPERATOR EXTRACT ALL ELEMENT/PROPERTIES FROM ARRAY/OBJECT

// spread operator on array
const Tab = [10, 20, 30];
const Tab2 = [1, 2, 3, ...Tab];
console.log(Tab2);

// spread operator on Object
const Obj1 = {
  Name: "John",
  Age: 25
};
console.log("SPREAD OPERATOR");
console.log(Obj1);

const Obj2 = {
  ...Obj1,
  gender: "male"
};
console.log(Obj2);

// REST OPERATOR USED IN FUNCTION AS PARAM AND TRANSFORM THEM IN A ARRAY
// REST operator
console.log("REST OPERATOR");
const filter = (...params) => {
  return params.filter((e, i) => checkLimit(e, i));
};

function checkLimit(nb, i) {
  return nb > 18 && i >= 1;
}
console.log("filter ");
console.log(filter(5, 19, 33));

// syntaxe 2
const filter2 = (...params) => {
  return params.filter((e, i) => e > 1 && i >= 1);
};
console.log("filter2 ");
console.log(filter2(5, 18, 31));

// EXTRAIT QUELQUES ELEMENTS/PROPRIETES D'UN TABLEAU/OBJECT
console.log("DESTRUCTURING");

const t1 = [1, 2, 5];
var [elt1, , elt2] = t1;
console.log(elt1);
console.log(elt2);

const Obj3 = {
  Name: "John",
  Age: 25
};
var { Age } = Obj3;
console.log(Age);

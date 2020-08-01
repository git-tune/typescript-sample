interface AddFunc {
  (a: number, b?: number): number;
}

let add: AddFunc;

add = (a: number, b: number): number => {
  return b ? a + b : a;
};

console.log(add(1, 3));
console.log(add(1));

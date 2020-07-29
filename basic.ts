const add = (n1: number, n2: number, msg: string, flg: boolean) => {
  if (flg) {
    return msg + n1 + n2;
  }
  return false;
};

let num1 = 1;
let num2 = 2;
let msg = '合計は';
let flg = true;

const result = add(num1, num2, msg, flg);

console.log(result);
console.log(typeof result);

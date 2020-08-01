function echoValue<T>(arg: T): T {
  return arg;
}

let val1 = echoValue(1);
let val2 = echoValue('1');

class test<T> {
  val: T;
}

let test1 = new test<number>();
test1.val = 100;

let test2 = new test<string>();
test2.val = 'hello';

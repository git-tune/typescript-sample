interface User {
  name: string;
  age: number;
  sayHi(): string;
}

const user: User = {
  name: 'yamada',
  age: 32,
  sayHi() {
    return 'Hello';
  },
};

console.log(user.sayHi());
console.log(user.name);
user.name = 'tune';

console.log(user.name);

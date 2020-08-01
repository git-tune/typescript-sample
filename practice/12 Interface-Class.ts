interface UserInterface {
  name: string;
  age: number;
}

interface SuperUserInterface extends UserInterface {
  deleteUser(): void;
}

class SuperU implements SuperUserInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  deleteUser(): void {
    throw new Error('Method not implemented.');
  }
  sayHi(): string {
    return 'Hello';
  }
}

const u = new SuperU('yamada', 32);

console.log(u);
console.log(u.sayHi());
console.log(u.deleteUser());

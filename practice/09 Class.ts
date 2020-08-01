class User {
  constructor(public name: string, public age: number) {}
}

class SuperUser extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }
  changeName(): void {
    this.name = 'root';
  }
}

const superUser = new SuperUser('saito', 30);
console.log(superUser);
superUser.changeName();
console.log(superUser);

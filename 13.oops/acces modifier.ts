class People {
  public name: string;
  private age: number;
  protected email: string | number;

  constructor(name: string, age: number, email: string | number) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getProfile(): string {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }
}

class Human extends People {
  constructor(name: string, age: number, email: string | number) {
    super(name, age, email);
  }

  getEmail(): string | number {
    return this.email;
  }
}

const john = new People("John", 20, "john@example.com");
console.log(john);
console.log(john.getProfile());

const abhishek = new Human("Abhishek", 34, 54);
console.log(abhishek);
console.log(abhishek.getEmail());
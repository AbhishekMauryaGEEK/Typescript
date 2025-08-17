class Student {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 2) {
      throw new Error("Name is too short.");
    }
    this._name = newName;
  }

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge <= 0 || newAge > 120) {
      throw new Error("Invalid age.");
    }
    this._age = newAge;
  }

  get profile(): string {
    return `Name: ${this._name}, Age: ${this._age}`;
  }
}

const s = new Student("Abhi", 21);
console.log(s.profile); 
s.name = "Maurya";
s.age = 22;
console.log(s.profile);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human_ {
    constructor(name, age, gender, secret) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.secret = secret;
    }
}
const person = {
    name: "dong",
    age: 25,
    gender: "male"
};
const donghyuk = new Human_("donghyuk", 25, "male", "helloworld");
const sayhi = (person) => {
    console.log('Hello ' + person.name + ', you are ' + person.age + ', you are a ' + person.gender);
};
sayhi(person);
sayhi(donghyuk);
//# sourceMappingURL=index.js.map
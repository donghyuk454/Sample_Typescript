interface Human {
    name:string;
    age:number;
    gender:string;
}

class Human_ {
    public name: string;
    public age: number;
    public gender: string;
    private secret: string;// class 외부에서 변경 X
    constructor(name: string, age: number, gender: string, secret?: string) {// 생성자
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
}

const donghyuk = new Human_("donghyuk", 25, "male", "helloworld");

const sayhi = (person: Human): void => {
    console.log('Hello ' + person.name + ', you are ' + person.age + ', you are a ' + person.gender);
}

sayhi(person);

sayhi(donghyuk);

export{};
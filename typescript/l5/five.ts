


class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }

}

let p=new Person("Anees",21)

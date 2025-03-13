// function greet(name: string, age: number): string 
// {
//     return `Hello ${name}, you are ${age} years old!`
// }

// let number:Array<number> =[1,2,3,4,5]



// console.log(greet("Alice", 30))
// console.log(greet("Bob", 20))



// type MathOperation=(c:number,d:number)=>number

// const add:MathOperation=(a,b)=>{
//     return a+b
// }


// const sub:MathOperation=(a,b)=>{
//     return a-b
// }

// const mul:MathOperation=(a,b)=>{
//     return a*b
// }

interface Person{
    name:string,
    age:number,
    greet:()=>void
}



const obj:Person={
    name:"Anees",
    age:30,
    greet:function(){
        console.log(`Hello ${this.name}`)
    }
}
// let a:number | string;

// a=23
// a="32"

// a=4


// interface Person{
//     name:string;
//     age:number;
// }


// interface Employee{
//     id:number;
//     name:string;
// }

// type Workers=Person & Employee;



// let worker:Workers=
// {
//     id:1,
//     name:"John",
//     age:25

// }


type IsString<T> = T extends string ? "Yes" : "No";

let a:IsString<string>= "Yes";
let b:IsString<number>="No";
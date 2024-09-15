function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
// function welcomePeople(x: string[] | string) {
//     if (Array.isArray(x)) {
//       // Here: 'x' is 'string[]'
//       console.log("Hello, " + x.join(" and "));
//     } else {
//       // Here: 'x' is 'string'
//       console.log("Welcome lone traveler " + x);
//     }
//   }
// function printId(id:number | string){
//     if (typeof id === "string") {
//         // In this branch, id is of type 'string'
//         console.log(id.toUpperCase());
//       } else {
//         // Here, id is of type 'number'
//         console.log(id);
//       }
// }
// function printId (id:number | string){
//     console.log("My Id is :"+id);
// }
// printId(101);
// // OK
// printId("202");
// // Error
// printId({ myID: 22342 });
// function printMethod(obj:{first:string;last:string}){
//     console.log(obj.last.toUpperCase());
//     if(obj.last !== undefined)
//     {
//         console.log(obj.last.toUpperCase());
//     }
//     console.log(obj.last?.toUpperCase());
// }
// function printCoord(pt: { x: number; y: number }) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
//   printCoord({ x: 3, y: 7 });
// const names = ["Alice","Bob","Eve"];
// names.forEach(function(s)  {
//     console.log(s.toUpperCase());
// })
// names.forEach((s) => {
//     console.log(s.toUpperCase());
// })
// async function getFavourite() : Promise<number>{
//     return 26;
// }
// let obj:any = {x:0};
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n : number = obj;
// "use strict";   
// function greet(person,date){
//     console.log("Hello".concat(person,", today is ".concat(date.toDateString(),"!")));
// }
// greet("Maddison", new Date());
// "use strict";
// function greet(person, date) {
//     console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
// }
// greet("Brendan", new Date());
// console.log("hello word");
// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
// }
// greet("Brendan");
// Explicit Types
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("John", new Date());

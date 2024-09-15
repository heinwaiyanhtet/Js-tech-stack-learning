type SomeConstructor = 
{
    new (s: string): Date;
};
  
function fn(ctor: SomeConstructor)
{
    return new ctor("hello");
}

const date = fn(Date); 

  

// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
//   }
   
//   function printToConsole(s: string) {
//     console.log(s);
//   }
   
//   greeter(printToConsole);

// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
//   } 

//   function printToConsole(s: string) {
//     console.log(s);
//   }
  
//   greeter(printToConsole);

// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
// }
  
//   function printToConsole(s: string) {
//     console.log(s);
//   }
  
//   greeter(printToConsole); // Output: "Hello, World"
  




// interface Circle {
//     kind: "circle";
//     radius: number;
//   }
  
//   interface Square {
//     kind: "square";
//     sideLength: number;
//   }
  
//   interface Triangle {
//     kind: "triangle";
//     sideLength: number;
//   }
  
// type Shape = Circle | Square | Triangle;

// function getArea(shape: Shape): number {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     // case "triangle":
//     //     return (Math.sqrt(3) / 4) * shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck; 
//   }
// }


// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
 
// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }
 
//   return animal.fly();
// }





// Argument of type 'string | number' is not assignable to parameter of type 'number'.
//   Type 'string' is not assignable to type 'number'.

// function padLeft(padding:number | string,input :string) : string
// {
//     if (typeof padding === "number")
//     {
//         return " ".repeat(padding) + input;

//     }
// }




// type Point = {
//     x : Number;
//     y : Number;
// }

// function printCoord(pt: Point) 
// {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({x:100,y:100});





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
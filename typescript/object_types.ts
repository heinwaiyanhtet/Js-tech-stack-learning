//////////////////////////////////////////////////////////////////


// type StringNumberPair = [string, number];

// function doSomething(pair: StringNumberPair) {
//   const [text, num] = pair;
//   console.log(text, num);
// }

// doSomething(["hello", 42]);


/////////////////////////////////////////////////////////////////////



// type StringNumberPair = [string,number];

// function doSomething(pair: StringNumberPair) 
// {
//     const [text, num] = pair;
//     console.log(text, num);
// }
  
// doSomething(["hello", 42]);





////////////////////////////////////////////////////////////////////////



// interface Box<Type> 
// {
//     contents: Type;
// }

// let stringBox: Box<string> = { contents: "hello" };

// let numberBox: Box<number> = { contents: 123 };

//////////////////////////////////////////////////////////////////////


//Extending types

// interface BasicAddress
//{
//     street:string,
//     city:string,
//     state:string,
//     postalCode:string
// }

// interface AddressWithUnit extends BasicAddress
// {
//     unit:string
// }


///////////////////////////////////////////////////


// interface SquareConig
// {
//     color?: string,

//     width?:number,
// }


// function createSquare(config:SquareConig):{color:string;area:number}    {
//     return {
//         color:config.color || "red",
//         area:config.width ? config.width * config.width : 20
//     }
// }

// let mySquare = createSquare({ color: "red", width: 100 });


//////////////////////////////////////////////////////



// interface StringArray {

//     [index:number]:string

// }

// const myArray: StringArray = getStringArray();
// const secondItem = myArray[1];




///////////////////////////////////////////////////////////



// interface Person
// {
//     name:string;
//     age:number
// }

// interface ReadonlyPerson
// {
//     readonly name : string;
//     readonly age : number
// }

// let writablePerson: Person = 
// {
//     name: "Person McPersonface",
//     age: 42,
// };
   
// let readonlyPerson: ReadonlyPerson = writablePerson;

// console.log(readonlyPerson.age);
// writablePerson.age++;
// console.log(readonlyPerson.age);




///////////////////////////////////////////////////////////

// interface Home
// {
//     readonly resident:{name:string;age:number}
// }

// function visitForBirthday(home:Home)
// {
//     console.log(`Happy birthday ${home.resident.name}`);
//     home.resident.age++;
// }

// function evict(home:Home)
// {
//     home.resident = {
//         name:"Victor",
//         age:19
//     }
// }




////////////////////////////////////////////////////////////////



// interface SomeType{
//     readonly prop:String;
// }

// function doSomething(obj:SomeType){


//     console.log(obj.prop);

//     obj.prop="hello";


// }
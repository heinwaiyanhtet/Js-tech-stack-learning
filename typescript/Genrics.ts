function identity<Type>(arg:Type) : Type {
    return arg;
}


// Restricting Genrics With Constraints

interface LengthWise
{
    length: number;
}


function loggingIdentity<Type extends LengthWise>(arg: Type): Type
{
    console.log(arg.length);
    return arg;
}

loggingIdentity([]);


////////////////////////////////////////////////////////////////



// With Genrics


// function identity<Type>(arg: Type) : Type
// {
//     return arg;
// }


// let output = identity<string>("mystring");

// let inferredOutput = identity("MyString");
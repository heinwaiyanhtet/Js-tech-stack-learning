
type User = {
  username: string,
  age: number,
}


function isAdult(user: User) : boolean
{
    return user.age > 18;

}


const user : User = {
    username: "hein wai yan htet",
    age: 20
}

const ispersonAdult : boolean = isAdult(user);
console.log(ispersonAdult);


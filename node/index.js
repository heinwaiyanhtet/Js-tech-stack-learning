const { Console } = require('node:console');
const http = require('node:http');
const fs = require('node:fs').promises;
const {EventEmitter}  = require('events');



const hostname = '127.0.0.1';
const port = 3000;




const server = http.createServer((req, res) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});




// function emitCount()
// {

//    const emitter = new EventEmitter();

//    let count = 0;

//    const interval = setInterval(() => {

//        count ++;

//        if(count%4 == 0)
//       {
//             emitter.emit(
//                 'error',
//                 new Error(`Something went wrong on count: ${count}`)
//             );
//       }

//       emitter.emit('success',count);

//       if(count === 10){
//         clearInterval(interval);
//         emitter.emit('end');
//       }

//    }, 1000);

//    return emitter;


// }

// const counter = emitCount();

// counter.on('success',(count) => {

//     console.log(`Counter is ${count}`);

// });

// counter.on('error',(error) => { 

//     console.log(error.message);

// });


// counter.on('end',() => { 

//       console.log('Counter has ended'); 

//  });



 



// function square(num,callback)
// {
//     if(typeof callback !== 'function'){
//       throw new TypeError(`Callback must be a function.Got: ${typeof callback}`);
//     }


//     setTimeout(() => {
//         if(typeof num !== 'number'){
//            callback(new TypeError(`Expected number but got: ${typeof num}`));
//            return;
//         }

//         const result = num * num;
//         callback(null, result);
//     },100)
// }


// square('8', (err, result) => {
//   if (err) {
//     console.error(err)
//     return
//   }

//   console.log(result);
// });


// function square(num) {
//   if (typeof num !== 'number') {
//     throw new TypeError(`Expected number but got: ${typeof num}`);
//   }

//   return num * num;
// }

// try {
//   square('8');
// } catch (err) {
//   console.log(err.message); // Expected number but got: string
// }









// Error handing in node.js

// function square(num){

//    if(typeof num !== 'number')
//    {
//        throw new TypeError(`Expected number but got: ${typeof num}`);
//    }


//    return num * num;

// }




// try {
  
// } catch (error) {
  
// }



// function parseJSON(data)
// {

//   return JSON.parse(data);

// }


// try {

//   const result =  parseJSON('A String');

// } catch (error) 
// {

//    console.log(error.messsage);

// }


// const userError = new TypeError("Something happened!");

// console.log(userError.name);
// console.log(userError.message);
// console.log(userError.stack);






// async function readFile () {
//     try {

//         const data = await fs.readFile('file.txt','UTF-8');
//         console.log('File content:', data);


//     } catch (error) 
//     {
        
//         if(error.code === 'ENOENT')
//         {
//               console.error('File not found:', error.message);
//         }
//         else if(error.code === "EACCESS")
//         {
//              console.log('Permession denied',error.message); 
//         }

//         else
//         {
//             console.log("Unexpected error",error.message);  
//         }


//     }
// }







// readFile();


//event loop 


// console.log("start");


// setTimeout(() => {

//     console.log("Timeout callback");

// }, 0);

// setImmediate(() => {

//     console.log("Immediate Callback");

// });

// process.nextTick(() => {
    
//     console.log("Next trick Callback");

// })


// console.log('End');





// global.myGlobalVar = 'Hello,Global!';

// console.log(global.myGlobalVar);



// process.stdin.setEncoding('utf-8');


// console.log("Please Enter Some text");



// process.stdin.on('data', (data) => {


//     const input = data.trim();
    
//     if(input === 'exit')
//     {
//         console.log('Exiting the program...');
//         process.exit();
//     }
//     else
//     {
//       console.log(`you entered: ${input}`);
//     }


// });




// event handling 
// const eventEmitter = require('node:events');

// const myEmitter = new eventEmitter();

// myEmitter.on('customEvent',(arg) => 
// {
//     console.log('Event occurred with argument:',arg);
// })

// myEmitter.emit('customEvent', 'Sample Argument');






// readFile();

// fs.readFile('./file.txt','utf-8',(err,data) => {
//      if(err){
//         console.log('Error reading the file:',err);
//         return;
//      }
//      console.log('File content:', data);
// })

// console.log("hello");



// try {
//     const data = fs.readFileSync('./file.txt', 'utf-8');
//     console.log('File content:', data);
// } catch (error) {
    
// }


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
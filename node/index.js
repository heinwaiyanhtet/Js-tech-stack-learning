const { Console } = require('node:console');
const http = require('node:http');
const fs = require('node:fs').promises;


const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});





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





// async function readFile () {
//     try {

//         const data = await fs.readFile('file.txt','UTF-8');
//         console.log('File content:', data);


//     } catch (error) {
        
//     }
// }

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
const http = require('node:http');
const fs = require('node:fs').promises;


const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

async function readFile () {
    try {

        const data = await fs.readFile('file.txt','UTF-8');
        console.log('File content:', data);


    } catch (error) {
        
    }
}

readFile();

fs.readFile('./file.txt','utf-8',(err,data) => {
     if(err){
        console.log('Error reading the file:',err);
        return;
     }
     console.log('File content:', data);
})

console.log("hello");



try {
    const data = fs.readFileSync('./file.txt', 'utf-8');
    console.log('File content:', data);
} catch (error) {
    
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
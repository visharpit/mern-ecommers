const fs = require('fs').promises;
// const fs = require('fs/promises');

// fs.writeFile('test.txt', 'Hello, World!')
// .then(()=>{
//     console.log('File written successfully');
// }).catch((err)=>{
//     console.error('Error writing file:', err);
// })

// fs.readFile('test.txt', 'utf-8')
// .then((data)=>{
//     console.log('File content:', data);
// }).catch((err)=>{
//     console.error('Error reading file:', err);
// })

// fs.appendFile('test.txt', '\nAppended text.')
// .then(()=>{
//     console.log('File appended successfully');
// }).catch((err)=>{
//     console.error('Error appending file:', err);
// })

// fs.readFile('test.txt', 'utf-8')
// .then((data)=>{
//     console.log('Updated file content:', data);
// }).catch((err)=>{
//     console.error('Error reading file:', err);
// })

// fs.unlink('test.txt')
// .then(()=>{
//     console.log('File deleted successfully');
// }).catch((err)=>{
//     console.error('Error deleting file:', err);
// })

//------------------async/await------------------

async function writeFile(){
    try{
        await fs.writeFile('test.txt', 'Hello, World!');
        console.log('File written successfully');
    }
    catch(error){
        console.error('Error writing file:', error);
    }
}
writeFile();

async function readFile(){
    try{
        const data = await fs.readFile('test.txt', 'utf-8');
        console.log('File content:', data);
    }
    catch(error){
        console.error('Error reading file:', error);
    }
}
readFile();

async function appendFile(){
    try{
        await fs.appendFile('test.txt', '\nAppended text.');
        console.log('File appended successfully');
    }
    catch(error){
        console.log('Error appending file:', error);
    }
}
appendFile();

async function  deleteFile(){
    try{
        await fs.unlink('test.txt');
        console.log('File deleted successfully');
    }
    catch(error){
        console.error('Error deleting file:', error);
    }
}
deleteFile();
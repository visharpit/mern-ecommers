const fs = require('fs');
// // asynchronous way to read file
// fs.readFile('text.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log("err", err);
//     }
//     console.log("data", data);
// })

// // synchronous way to read file

// const data = fs.readFileSync('text.txt', 'utf-8');
// console.log("data", data);

// // write file synchronously
// fs.writeFileSync('text.txt', "Hello World");

// const updatedData = fs.readFileSync('text.txt', 'utf-8');
// console.log("data", updatedData);

// // write file asynchronously
// fs.writeFile('text.txt', "Hello worle Asynchronous", (err)=>{
//     if(err){
//         console.log("err", err);
//     }
//     console.log("file created successfully");
// })

// // append file asynchronously

// fs.appendFile('text.txt', '  Appended data', (err)=>{
//     if(err){
//         console.log("err", err);
//     }
//     console.log("file appended successfully");
// })

// // append file synchronously
// fs.appendFileSync('text.txt', '  Appended data synchronously');

// const newlyUpdatedData = fs.readFileSync('text.txt', 'utf-8');
// console.log("data", newlyUpdatedData);

// //rename file 

// fs.rename('text.txt', 'newText.txt', (err)=>{
//     if(err){
//         console.log("err", err);
//     }
//     console.log("file renamed successfully");
// })

//delete file

fs.unlink('newText.txt', (err)=>{
    if(err){
        console.log("err", err);
    }
    console.log("file deleted successfully");
})


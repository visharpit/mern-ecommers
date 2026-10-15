const EventEmitter = require('events');
const event = new EventEmitter();
const dotenv = require('dotenv');
dotenv.config();

event.on('greet', ()=>{
    console.log('Hello this is an event emitter');
})


event.emit('greet');

// event.on('user', (name, age)=>{
//     console.log(`Hello ${name}, you are ${age} years old`);
// })
event.once('user', (name, age)=>{
    console.log(`Hello ${name}, you are ${age} years old`);
})

event.emit('user', 'Arpit', 31);
event.emit('user', 'Rahul', 20);
event.emit('user', 'Riya', 29);

function onDataReceived(data){
    console.log(`Data received: ${data}`);
}
event.on('data', onDataReceived);
event.removeListener('data', onDataReceived);
event.emit('data', 'This is some data');
event.emit('data', 'This is my second data');

console.log("process", process.pid);

console.log("process platform", process.platform);
console.log("process version", process.version);
console.log("process.log", process.env.MONGO_URI);

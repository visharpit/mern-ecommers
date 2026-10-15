const http = require('http');
// const age = 25;
// const server = http.createServer((req, res)=>{
//     // res.writeHead(200, {'content-type': 'text/html'})
//     // res.write('<h1>Hello World</h1>');
//     // res.end('This is my first server');
//     if(req.url === '/'){
//         res.writeHead(200, {'content-type': 'text/html'});
//         res.write(`<h1> Home Page</h1>
//             <p>Welcome to my home page</p>
//             <p>My age is ${age}</p>
//             <p>and my DOB is ${new Date().toLocaleDateString()}</p>`);
//         res.end();
//     }
//     else if(req.url === '/about'){
//         res.writeHead(200, {'content-type': 'text/plain'});
//         res.write('About Page');
//         res.end();
//     }
//     else if(req.url === '/contact'){
//         res.writeHead(200, {'content-type': 'text/plain'});
//         res.write(JSON.stringify({name:'John Doe', email:'johndoe@gmail.com'}));
//         res.end();
//     }
//     else{
//         res.writeHead(404, {'content-type':'text/html'});
//         res.write('<h1>404 page not found</h1>');
//         res.end();
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })
const userData = [{
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    age: 25
},
{
    id: 2,
    name: 'Arpit Vish',
    email: 'arp@gamil.com',
    age: 27
}
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(userData));
    res.end();
}).listen(3000);



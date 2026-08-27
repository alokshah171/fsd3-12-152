import http from 'http'

const server = http.createServer((req,res) => {
    res.writeHead(200,{"content-type":"application/json"});


    const product1 ={
        name:"Iphone",
        price:85000,
        qty:2,
        discount :15,

    };

    const product2 ={
        name:"SAMSUNG",
        price:85000,
        qty:2,
        discount :15,

    };


    res.end(JSON.stringify(product));

});

server.listen(3000,()=> console.log("Server is running at 3000 ..."));
const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
    //* GET 요청 시 실행
    if(request.method === 'GET'){
        if(request.url === '/'){
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            const data = fs.readFileSync('./index.html');
            response.write(data);
            response.end();
        }
    }
})






const PORT = 3000;


// * PORT : 3000 실행
server.listen(PORT, function(){
    console.log("http://localhost:3000");
})

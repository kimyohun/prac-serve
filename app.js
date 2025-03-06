const http = require('http');

const server = http.createServer(function(request, response){
    //* GET 요청 시 실행
    if(request.method === 'GET'){
        if(request.url === '/'){
            console.log("첫 메인페이지");
        }
    }
})






const PORT = 3000;


// * PORT : 3000 실행
server.listen(PORT, function(){
    console.log("http://localhost:3000");
})
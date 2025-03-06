const http = require('http');

const server = http.createServer(function(request, response){

})

const PORT = 3000;

server.listen(PORT, function(){
    console.log("http://localhost:3000");
})
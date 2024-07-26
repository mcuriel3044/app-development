//import the http module
const http = require('http')
const fs = require('fs')

//create server
const server = http.createServer(function(request,response){
    //send the response
    /*response.write("This is the response from the server")
    response.end("\n -----------------end response-------------------\n")
    console.log(request.url)*/
    response.writeHead(200,{'Content-Type':'text/html'})
    //const readStream = fs.createReadStream(__dirname + '/index.html')

    //piping - creating media
   // readStream.pipe(response)

   //create routing using url
   const url = request.url
   if (url ==='/home' || url === '/'){
    fs.createReadStream('index.html').pipe(response)
   }
   else if  (url==="/about"){
    fs.createReadStream('about.html').pipe(response)
   }
   else{
    fs.createReadStream('404.html').pipe(response)
   }
})

//server is listening to port 3000
server.listen(3100,function(){
    console.log('Server is running')
})

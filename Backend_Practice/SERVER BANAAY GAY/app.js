const http=require('http');

const server=http.createServer((req,res,next)=>{
    if(req.url=="/about"){
        res.end('About PAge')
    }
    if(req.url=="/contact"){
        res.end('Contact PAge')
    }
    if(req.url=="/"){
        res.end('Home PAge')
    }
    if(req.url=="/services"){
        res.end('Services PAge')
    }

})

server.listen(3000,()=>{

})
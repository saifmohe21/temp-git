const http = require('http')

const server= http.createServer((req, res)=>{
     if(req.url==='/'){
          res.end('this is our home page.')

     }
     if(req.url==='/about '){
          res.end('this is our short history.')
     }  -

     res.end(`
          <h1>Oops!</h1>
          <p>the page is not found!</p>
          <a href="/">Back home</a>
          `)

})

server.listen(5000)
// nyalain node namafile
const http = require('http')

let server = http.createServer( function(request, response){
  // console.log('tes nyalain server')
  let namaPresiden = 'Saya siapa'
  let gajiPresiden = 1000
  response.writeHead(200,{'content-type': 'text/html'})
  response.end(`Hallo ${namaPresiden}`)
})

server.listen(3000,() =>{
  console.log('http://localhost:3000')
  
})
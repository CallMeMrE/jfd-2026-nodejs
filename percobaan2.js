const http = require('http')

http.createServer((req, res) =>  {
  res.writeHead(200,{'Content-type': 'text/html'})
  if (req.url == '/'){
    res.write(
      `<h1>Halaman Utama</h1><hr>
      <p>ini adalah halaman utama kita</p><hr>
      <button>simpan</button>`
    )
  }
  else if(req.url == '/about'){
    res.write(
      `<h1>Halaman about</h1><hr>`
    )
  }
  else{
      res.write('<h1>not found</h1>')
  }
}).listen(3000,() =>{
  console.log('http://localhost:3000')
})
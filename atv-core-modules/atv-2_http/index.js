const http = require('http')

const PORT = 5000

const server = http.createServer((req,res)=>{
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/plan'})
        res.write('Bem-vindo página inicial!')
        res.end()
    } else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type':'text/plan'})
        res.write('Sobre nós: somos uma empresa dedicada a...')
        res.end()
    } else {
        res.writeHead(404, {'Content-Type':'text/plan'})
        res.write('Página não encontrada')
        res.end()
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}😊`)
})
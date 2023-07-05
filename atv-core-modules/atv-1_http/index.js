const http = require('http')

const PORT = 5000

const server = http.createServer((req, res) =>{
    res.write('Olá,Mundo!')
    res.end()
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}😊`)
})
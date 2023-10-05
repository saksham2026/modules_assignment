let http = require('http')
let server = http.createServer((req,res)=>{
    res.write('I am happy to learn fullStackDevelopment from PW skills!!')
    res.end()
})

server.listen(3456)
const EventEmitter = require('events');
const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=> {
    console.log(`data recieved with ${name} and ${id}`)
})
customEmitter.on('response',()=> {
    console.log(`some other output`)
})
customEmitter.on('response',()=> {
    console.log(`more output`)
})

customEmitter.emit('response','john',34) 

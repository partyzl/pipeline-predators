const app = require('./app')
const port = 3000;

app.listen(port, ()=>
    console.log(`\nPipeline Predators are taking off at port${port}`))
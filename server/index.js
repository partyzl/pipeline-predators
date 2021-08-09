const app = require('./app')
const port = process.env.PORT || 3000;

app.listen(port, ()=>
    console.log(`\nPipeline Predators are taking off at port ${port}`))
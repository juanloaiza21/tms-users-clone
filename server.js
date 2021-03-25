const app = require("./src/app");
const mongoose = require ("mongoose")


const port = process.env.PORT || 3000

mongoose
	.connect("mongodb://localhost:27017/db", { useNewUrlParser: true  ,useUnifiedTopology: true })
	.then(() => {
		app.listen(port,()=>{
            console.log(`api running port ${port}`);
            console.log(`Connected to local mongoDB`);
        })
})
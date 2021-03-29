const app = require("./src/app");

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`api running port ${port}`);
    console.log(`Connected to local mongoDB`);
})
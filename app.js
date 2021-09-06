let express = require("express");
let app = express();
let path = require("path");
let publicPath = path.join(__dirname,"./public");
const port = 3030;

app.use(express.static(publicPath));

app.listen(port,()=>console.log("servidor en linea http://localhost:3030"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});



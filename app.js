const express=require('express');
const app = express();

const path=require('path');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res)=>{
    res.render('resume.ejs');
});

app.listen(8080,() => {
    console.log("App is listening on port 8080");
});
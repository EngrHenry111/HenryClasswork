
// const express = require("express")

// const mongoose = require("mongoose");
// const app = express()


// const port = 
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/userAuth", { 
//     useNewUrlParser: true,
//     userUnifiedTopology: true,
// })
// .then(()=> console.log("MongoDB Connected"))
// .catch(err => console.log("Connection Error", err));


// app.get("/", (request, response) =>{
  
// })


// app.get("/", (request, response) =>{
//     response.send("hellow world")
// })


// app.listen(port, ()=>{
//     console.log(`server is up and running on port ${port}`)
   
// })





// app.use((req, res) =>{
//     req.status(404).send("the page you are looking for is not exist");
// })


// const express = require('express');
// const mongoose = require('mongoose');
// const userRoutes = require("./routes/userRoute")
// const app = express();
// const port = 3000
 
// app.u se(express.json());

// app.use("/auth", userRoutes)
 
// //mongodb://0.0.0.0:27017
// mongoose.connect("mongodb://localhost:27017/userAuth", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.error("Connection Error: ", err));
 
 
 
// app.listen(port, () => console.log('Server is up and running on port 3000'));
 



const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const productRoute = require("./routes/productRoute")
 
 
const app = express();
const port = 3000
 
app.use(express.json());
app.use(cors());
app.use("/auth" , userRoutes);
app.use("/api", bookRoutes);
app.use("/api", productRoute);

app.get("/", (req, res)=>{
    res.send("API is ready for use\nThank you")
})

const live_Uri = "mongodb+srv://EngrHenry:engrakpan@cluster.wavse.mongodb.net/myStore?retryWrites=true&w=majority&appName=Cluster"
const local_Uri = ("mongodb://localhost:27017/userAuth")
mongoose.connect(live_Uri)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error : ", err));
 
 
 
 
app.listen(port, () => console.log('Server is up and running on port 3000'));
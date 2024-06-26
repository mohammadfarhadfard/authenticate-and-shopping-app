const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")




mongoose.connect(process.env.MONGO_URL).then( () => console.log('db connected')).catch((err) =>{
    console.log(err);
})

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users" , userRoute)
app.use("/api/products" , productRoute)
app.use("/api/carts" , cartRoute)
app.use("/api/orders" , orderRoute)



app.listen(5968, () => {
    console.log('server is running');
})
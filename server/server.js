const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connectDb} = require('./config/db');
const postRoutes = require('./Routes/postRoutes');

dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI); // Check if MONGO_URI is loaded

const app = express();

app.use(express.json());
app.use(cors());


connectDb().then(
  ()=>{
    app.use('/posts',postRoutes);
    const PORT=process.env.PORT||4000;
    app.listen(PORT,()=>{
      console.log(`Server is running on Port ${PORT}`);
    })
  }
);



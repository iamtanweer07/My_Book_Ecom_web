import express  from 'express';
import  dotenv  from   'dotenv';
import colors from "colors";
import connectDB from './database/db.js';
import DefaultData from './default.js';
import home  from "./routes/home.js";
import cors  from  'cors';
import bodyParser from 'body-parser';


const app = express()

dotenv.config();

//databse config
connectDB();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/' , home);
app.use('/login', home);



//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});

DefaultData();





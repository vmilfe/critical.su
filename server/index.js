import express from 'express'
import dotenv from 'dotenv';

import connectDB from './database.js';
import Visitor from './models/Visitor.js';


const app = express()
const port = process.env.SERVER_PORT;

dotenv.config();
connectDB()


app.get('/api/view', async (req, res) => {
  try {
    const user_ip = req.query.user_ip;
    const user_agent = req.query.user_agent;
    const exist = await Visitor.exists({ user_ip });
    
    let firstRequest = true;

    if (!exist) {
      try {
        await Visitor.create({
          ip: user_ip, user_agent
        })
      } catch(error) {
        console.log('error', error)
      }
      
     console.log(user_agent, user_ip);
    } else {
      console.log('reload');
      firstRequest = false;
    }

    res.json({
      newVisit: firstRequest
    });

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    });
  }
})

app.listen(port, () => {
  console.log(`backend api lending run on: ${port} port`)
})

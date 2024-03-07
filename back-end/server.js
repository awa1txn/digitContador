import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false, // Set this to false to exclude createdAt and updatedAt
  }
},
);

// Define the model for the 'networth' table
const Networth = sequelize.define('networth', {
  cash: {
    type: DataTypes.FLOAT,
  },
  crypto: {
    type: DataTypes.FLOAT,
  },
  card: {
    type: DataTypes.FLOAT,
  },
  date:{
    type: DataTypes.STRING
  }
});

sequelize.sync();

const app = express()
app.use(cors())

app.use(bodyParser.json());

app.use((error, req, res, next) => {
  console.log('handle error')
  res.status(500).json({ok: false, message: error.message})
})

app.get('/owner', (req, res)=>{
  res.json({owner: 'daniil.shapovalov200247@gmail.com'})
})

// Express route to handle POST requests
app.post('/api/networth', async (req, res) => {
  try {
    const { cash, crypto, card, email, date } = req.body.data;

    console.log(cash, crypto, card, date, email )
    if(email !== 'daniil.shapovalov200247@gmail.com'){
      return res.status(400).json({ error: 'You logged in via wrong email.' });
    }

    // Validate that the required fields are present
    if (cash === undefined || card === undefined || crypto === undefined) {
      return res.status(400).json({ error: 'Cash, crypto, and card are required in the request body.' });
    }
    // Insert data into the 'networth' table
    await Networth.create({ cash, crypto, card, date });

    return res.status(201).json({ message: 'Data inserted successfully.' });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

app.get('/api/networth', async (req, res) => {
  try {
    // Fetch all rows from the 'networth' table
    const networthData = await Networth.findAll();

    // Convert the Sequelize result to a plain array of objects
    const networthArray = networthData.map((entry) => entry.get({ plain: true }));

    return res.json(networthArray);
  } catch (error) {
    console.error('Error handling GET request:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(4000, () => {
  console.log(`Server is running on http://localhost:${4000}`);
});
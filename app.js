const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected!'))
.catch((err) => console.error('Error connecting to MongoDB: ', err));

const recipesRouter = require('./routes/recipes');
app.use('/recipes', recipesRouter);

app.get('/', (req, res) => {
  res.send('Ok!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

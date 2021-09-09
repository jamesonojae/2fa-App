const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server is Listening on Port: ${PORT}`);
});

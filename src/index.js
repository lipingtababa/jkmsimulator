const port = process.env.PORT
const jkm = require('./jkm');

const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/v1/jkm', jkm);

app.listen(port, () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});

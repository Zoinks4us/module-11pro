const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3001
const publicPath = path.join(__dirname, 'public');

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

app.use(express.static('public'))

app.get('/notes', (req, res) => {
  res.sendFile(path.join(publicPath, 'notes.html'))
})

const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    var message="Hellow from Node";
    res.send({ message: message });
  });

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);

});
const express      = require('express');
const Path         = require('path');
const bodyParser   = require('body-parser');
const environment  = require('./config/environment');
const routes       = require('./routes/index.js');
const port         = process.env.PORT;
const assetFolder  = Path.resolve(__dirname, '../dist/');
const app          = express();

app.use(bodyParser.json());
app.use(express.static(assetFolder));

app.use('/', routes);

app.listen(port, function(){
  console.log("Server is listening on port", port);
});

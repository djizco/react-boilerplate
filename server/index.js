const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');
const routes       = require('./routes/index');

require('./config/environment');

const assetFolder  = path.resolve(__dirname, '../dist/');
const app          = express();

const port         = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static(assetFolder));

app.use('/', routes);

app.listen(port, () => console.log('Server is listening on port', port));

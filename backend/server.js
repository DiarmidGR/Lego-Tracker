const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.route');
const config = require('./config/config');
const inventorySetsRoute = require('./routes/inventorySets.route');
const setsRoute = require('./routes/sets.route');

app.use(express.json(), cors());

app.use('/api/auth', authRoutes);

app.use('/api/lego/inventory_sets', inventorySetsRoute);

app.use('/api/lego/sets', setsRoute);

app.listen(config.port, ()=> {
    console.log('Server running on port ' + config.port);
});
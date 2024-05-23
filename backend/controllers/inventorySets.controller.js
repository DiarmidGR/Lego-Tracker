const connection = require('../config/db.config');

exports.getInventorySets = (req, res) => {
    connection.query('SELECT * FROM inventory_sets', (error, results) => {
        if (error) {
            console.log('Error executing SQL command.');
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
};

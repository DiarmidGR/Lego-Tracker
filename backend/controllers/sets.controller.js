const connection = require('../config/db.config');

exports.getSets = (req, res) => {
    connection.query('SELECT * FROM sets', (error, results) => {
        if (error) {
            console.log('Error executing SQL command.');
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
};

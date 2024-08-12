const db = require('../config/db');

const Banner = {
    getSettings: (callback) => {
        const query = 'SELECT * FROM banner_settings WHERE id = 1';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                return callback(err, null);
            }
            callback(null, results[0]); // Assuming a single row is expected
        });
    },

    updateSettings: (data, callback) => {
        const { description, timer, link, isVisible } = data;
        const query = `
            UPDATE banner_settings 
            SET description = ?, timer = ?, link = ?, isVisible = ?
            WHERE id = 1
        `;
        db.query(query, [description, timer, link, isVisible], callback);
    }
};

module.exports = Banner;

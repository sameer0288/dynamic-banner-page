const Banner = require('../models/Banner');

exports.getBanner = (req, res) => {
    Banner.getSettings((err, data) => {
        if (err) {
            console.error('Error retrieving banner settings:', err);
            return res.status(500).json({ message: 'Error retrieving banner settings', error: err });
        }
        res.json(data);
    });
};


exports.updateBanner = (req, res) => {
    Banner.updateSettings(req.body, (err) => {
        if (err) {
            console.error('Error updating banner settings:', err);
            return res.status(500).json({ message: 'Error updating banner settings', error: err });
        }
        res.status(200).json({ message: 'Banner settings updated successfully' });
    });
};

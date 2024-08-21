const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/create', (req, res) => {
    const { filename, data } = req.body;
    fs.appendFile(filename, data, (err) => {
        if (err) {
            return res.status(500).send('Error creating or appending to file.');
        }
        res.send('File created or appended successfully.');
    });
});

router.put('/update', (req, res) => {
    const { filename, data } = req.body;
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return res.status(500).send('Error updating file.');
        }
        res.send('File updated successfully.');
    });
});

router.delete('/delete', (req, res) => {
    const { filename } = req.body;
    fs.unlink(filename, (err) => {
        if (err) {
            return res.status(500).send('Error deleting file.');
        }
        res.send('File deleted successfully.');
    });
});

module.exports = router;

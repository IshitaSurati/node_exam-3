const express = require('express');
const { Sum, Subtract, Multiplaction, Division, Modulo } = require('../math');
const router = express.Router();

router.post('/add', (req, res) => {
    const { a, b } = req.body;
    const result = Sum(a, b);
    res.send(`Sum: ${result}`);
});

router.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = Subtract(a, b);
    res.send(`Difference: ${result}`);
});

router.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = Multiplaction(a, b);
    res.send(`Product: ${result}`);
});

router.post('/divide', (req, res) => {
    const { a, b } = req.body;
    const result = Division(a, b);
    res.send(`Quotient: ${result}`);
});

router.post('/modulo', (req, res) => {
    const { a, b } = req.body;
    const result = Modulo(a, b);
    res.send(`Modulo: ${result}`);
});

module.exports = router;

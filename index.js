const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const calcRoutes = require('./routes/calcRoutes');

const app = express();



app.use(express.json()); 


app.use('/file', fileRoutes);
app.use('/calculator', calcRoutes);

app.listen(8090, () => {
    console.log(`Server is running on port 8090`);
});



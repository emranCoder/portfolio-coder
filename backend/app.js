const express = require('express');
const db = require('./config/db')
const dotenv = require('dotenv');
var cors = require('cors');
const app = express();
const productRoutes = require('./routes/product');


const { notFound, errorHandler } = require('./middleware/errorHandler');


dotenv.config();

const options = {
    origin: `${process.env.ROOT}${process.env.APP_PORT}`,
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: '*',
    optionsSuccessStatus: 200,
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(options));

app.use('/api/product', productRoutes);


app.use(notFound);
app.use(errorHandler);



app.listen(process.env.APP_PORT, () => {
    console.log(`Listening port ${process.env.ROOT}${process.env.APP_PORT}...`);
    db();
});
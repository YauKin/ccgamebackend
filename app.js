const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');
const productRouter = require('./routes/product');

app.use('/api/user', userRouter);
app.use('/api/order', orderRouter);
app.use('/api/product', productRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


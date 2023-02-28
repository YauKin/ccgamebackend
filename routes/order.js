const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('../config');
const API_BASE_URL = config.API_BASE_URL;

router.get('/creatRentOrder', async (req, res) => {
    const pId = req.query.pId;
    const userId = req.query.userId;
    const authLoginCode = req.query.authLoginCode;

    try {
        const response = await axios.get(`${API_BASE_URL}order/creatRentOrder`, {
            params: {
                pId,
                userId,
                authLoginCode,
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.get('/creatReserveOrder', async (req, res) => {
    const pId = req.query.pId;
    const userId = req.query.userId;
    const authLoginCode = req.query.authLoginCode;

    try {
        const response = await axios.get(`${API_BASE_URL}order/creatReserveOrder`, {
            params: {
                pId,
                userId,
                authLoginCode,
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.get('/orderGiveBack', async (req, res) => {
    const pId = req.query.pId;
    const userId = req.query.userId;
    const authLoginCode = req.query.authLoginCode;

    try {
        const response = await axios.get(`${API_BASE_URL}order/orderGiveBack`, {
            params: {
                pId,
                userId,
                authLoginCode,
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.get('/orderCancel', async (req, res) => {
    const userId = req.query.userId;
    const oId = req.query.oId;
    const authLoginCode = req.query.authLoginCode;

    try {
        const response = await axios.get(`${API_BASE_URL}order/orderCancel`, {
            params: {
                userId,
                oId,
                authLoginCode,
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

// Get user order list
router.get('/getUserOrderList', async (req, res) => {
    const userId = req.query.userId;
    const status = req.query.status;
    const authLoginCode = req.query.authLoginCode;

    try {
        const response = await axios.get(`${API_BASE_URL}order/getUserOrderList`, {
            params: {
                userId,
                status,
                authLoginCode,
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

// Get user pre-order list
router.get('/getUserPreOrderList', async (req, res) => {
    const userId = req.query.userId;
    const status = req.query.status;
    const authLoginCode = req.query.authLoginCode;

    try {
        const response = await axios.get(`${API_BASE_URL}order/getUserPreOrderList`, {
            params: {
                userId,
                status,
                authLoginCode,
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});
module.exports = router;
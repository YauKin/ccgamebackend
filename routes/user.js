const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('../config');
const API_BASE_URL = config.API_BASE_URL;

router.get('/login', async (req, res) => {
    const phone = req.query.phone;
    const pwd = req.query.pwd;
    try {
        const response = await axios.get(`${API_BASE_URL}user/login`, {
            params: {
                phone,
                pwd,
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.get('/getUserInfo', async (req, res) => {
    const userId = req.query.userId;
    const authLoginCode = req.query.authLoginCode;
  
    try {
      const response = await axios.get(`${API_BASE_URL}user/getUserInfo`, {
        params: {
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

module.exports = router;
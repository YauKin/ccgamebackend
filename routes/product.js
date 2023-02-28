const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_BASE_URL = 'https://tw.frxgame.com/api/';

router.get('/product/getProductList', async (req, res) => {
  const cId = req.query.cId;
  const page = req.query.page;
  const authLoginCode = req.query.authLoginCode;

  try {
    const response = await axios.get(`${API_BASE_URL}product/getProductList`, {
      params: {
        cId,
        page,
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
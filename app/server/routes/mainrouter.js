const express = require('express');
const router = express.Router();
const homeRouter = require('./homeRouter');


router.get('/', homeRouter.view);
router.get('/home', homeRouter.view);

module.exports = router;
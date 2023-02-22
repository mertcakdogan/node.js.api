const express = require('express');
const {register,login} = require('../controllers/auth.js');


const router = express.Router();

// login ve register olaylarının baslangicini yaptim
router.post('/register',register)
router.post('/login',login)

module.exports = router
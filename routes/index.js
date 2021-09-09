const { Router } = require('express');

const router = Router();

router.use('/secret', require('./secret'));

module.exports = router;

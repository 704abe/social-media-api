const router = require('express').Router();
const apiRoutes = require('./api');

// router.use('/', (req, res) => res.send('hello'));

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

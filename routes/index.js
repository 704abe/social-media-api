const router = require('express').Router();
const apiRoutes = require('./api');

// router.use('/api', (req, res) => res.send('right route!'));
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

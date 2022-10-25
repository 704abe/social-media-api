const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// router.use((req, res) => res.send('Wrong route!'));

router.use('/users', userRoutes);
router.use('/thoughts',thoughtRoutes);

module.exports = router;

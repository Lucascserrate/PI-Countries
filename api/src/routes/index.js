const { Router } = require('express');

const countryRoutes = require('./country.routes');
const activityRoutes = require('./activity.routes');


const router = Router();

router.use('/countries', countryRoutes);
router.use('/activities', activityRoutes);



module.exports = router;

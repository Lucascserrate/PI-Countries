const { Router } = require('express');
// Importar todos los routers;
const countryRoutes = require('./countryRoutes');
const activityRoutes = require('./activityRoutes');


const router = Router();

// Configurar los routers
router.use('/countries', countryRoutes);
router.use('/activities', activityRoutes);



module.exports = router;

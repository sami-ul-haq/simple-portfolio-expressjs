const router = require("express").Router();
const homeController = require("../controllers/homeController");
const skillsController = require("../controllers/skillController");
const contactController = require("../controllers/contactController");
const servicesController = require("../controllers/servicesController");


router.get("/" , homeController);
router.get("/skills" , skillsController);
router.get("/contact" , contactController);
router.get("/services" , servicesController);


module.exports = router;
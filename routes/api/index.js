const router = require("express").Router();
const employeeRoutes = require("./employees");
const siteRoutes = require("./site");
const employeeCertRoutes = require("./employeeCerts");
const siteCrews = require("./siteCrews");
const certificatesRoutes = require("./certificates");
const userRoutes = require("./user");
const companyRoutes = require("./company");


// Employee routes
router.use("/employee", employeeRoutes);
<<<<<<< HEAD
<<<<<<< HEAD
=======
router.use("/crews", siteCrews);
>>>>>>> f47a88bd88645be45a729c5bed6cc71bd5f4788c
=======
router.use("/crews", siteCrews);
>>>>>>> 3a08dc9675d7969a5235a82e7b3a0c2c51b716ef
router.use("/site", siteRoutes);
router.use("/employeecerts", employeeCertRoutes);
router.use("/certificates", certificatesRoutes);
router.use("/user", userRoutes);
router.use("/company", companyRoutes);


module.exports = router;
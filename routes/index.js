var express = require('express');
var router = express.Router();
const homeRoutes = require("./homeRoutes");
router.use("/", homeRoutes);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;

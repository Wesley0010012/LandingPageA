const HomeController = require('../controllers/homeController.Class');
const homeController = new HomeController;

exports.view = (req, res) => {
  res.render('home', {local: 'home'});
}
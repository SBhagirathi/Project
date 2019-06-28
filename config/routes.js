const express = require('express');
const router = express.Router();
const {restaurantsController} = require('../app/controllers/restaurants_controller');
const {categoriesController} = require('../app/controllers/categories_controller');
const {menusController} = require('../app/controllers/menus_controller');
const {usersController} = require('../app/controllers/users_controller');
const {ordersController} = require('../app/controllers/orders_controller');

router.use('/restaurants',restaurantsController);
router.use('/categories',categoriesController);
router.use('/menus',menusController);
router.use('/users',usersController);

module.exports = {
    router
}
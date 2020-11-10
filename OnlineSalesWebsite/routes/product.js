const express = require('express');
const router = express.Router();

const { create, productById, read,update,remove } = require("../controllers/product");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");


router.post("/product/create/:userId", requireSignin,isAdmin,isAuth, create);
router.get("/product/:productId", read);
router.put("/product/:productId/:userId",requireSignin,isAdmin,isAuth,update)
router.delete("/product/:productId/:userId",requireSignin,isAdmin,isAuth,remove)
router.param("userId", userById);
router.param("productId", productById);


module.exports = router;  
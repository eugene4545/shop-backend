const express = require('express');
const { createProduct, 
    getaProduct, 
    getAllproduct, 
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages, 
} = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const { uploadPhoto, 
    productImgResize 
} = require('../middlewares/uploadImages');
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put(
'/upload/',   
authMiddleware, 
isAdmin, 
uploadPhoto.array('images', 10), 
productImgResize,
uploadImages
);
router.get("/:id", getaProduct);
router.put('/wishlist', authMiddleware, addToWishlist);
router.put('/rating', authMiddleware, rating);
router.put("/:id",authMiddleware,isAdmin, updateProduct);
router.delete("/:id",authMiddleware,isAdmin, deleteProduct);
router.delete("/delete-img/:id",authMiddleware,isAdmin, deleteImages);
router.get("/", getAllproduct);





module.exports = router;
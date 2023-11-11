const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createBlog, 
    updateBlog, 
    getBlog, 
    getAllBlogs, 
    deleteBlog,  
    liketheBlog,
    disliketheBlog,
    uploadImages,
    
} = require('../controller/blogCtrl');
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadimages');
// const { uploadImages } = require('../controller/productCtrl');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createBlog);
router.put(
    '/upload/:id', 
    authMiddleware, 
    isAdmin, 
    uploadPhoto.array("images", 10),
    blogImgResize,
    uploadImages
    );
router.put('/likes', authMiddleware, liketheBlog);
router.put('/dislikes', authMiddleware, disliketheBlog);

router.put('/:id', authMiddleware, isAdmin, updateBlog);

router.get('/:id', getBlog);
router.get('/', getAllBlogs);

router.delete('/:id', authMiddleware, isAdmin, deleteBlog);

module.exports = router;
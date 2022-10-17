import express from "express";
import { 
    createProduct, 
    deleteProduct, 
    getAllProdcuts,
    getProductById, 
    updateProduct 
} from "../controllers/Products.js";

const router = express.Router();

router.get('/',getAllProdcuts);
router.get('/:id',getProductById);
router.post('/create',createProduct);
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;
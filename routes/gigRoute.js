
import express from "express";
import { verifyToken } from './../middleware/jwt.js';
import { 
    getGigs, 
    createGig,
    getGig,
    deleteGig
} from "../controllers/gigController.js";

const router = express.Router();

router.get('/', getGigs);
router.post('/', verifyToken, createGig);
router.delete('/:id', verifyToken, deleteGig);
router.get('/:id', getGig);

export default router;
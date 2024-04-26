import express from "express";
const router = express.Router();

import {deleteUser,getUsers  } from "../controllers/user.js";


router.delete('/:id', deleteUser);
router.get('/', getUsers);


export default router;
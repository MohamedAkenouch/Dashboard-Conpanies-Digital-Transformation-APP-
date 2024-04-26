import express from 'express';

import { getInitiatives, getInitiative, createInitiative, updateInitiative, deleteInitiative } from '../controllers/Initiative.js';

const router = express.Router();

router.get('/', getInitiatives);
router.post('/', createInitiative);
router.get('/:id', getInitiative);
router.patch('/:id', updateInitiative);
router.delete('/:id', deleteInitiative);

export default router;
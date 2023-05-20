import express from 'express';

import { getAxesDigital, getAxeDigital, createAxeDigital, updateAxeDigital, deleteAxeDigital } from '../controllers/axesDigital.js';

const router = express.Router();

router.get('/', getAxesDigital);
router.post('/', createAxeDigital);
router.get('/:id', getAxeDigital);
router.patch('/:id', updateAxeDigital);
router.delete('/:id', deleteAxeDigital);

export default router;
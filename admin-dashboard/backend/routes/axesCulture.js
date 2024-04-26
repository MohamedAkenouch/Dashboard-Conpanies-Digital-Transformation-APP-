import express from 'express';

import { getAxesCulture, getAxeCulture, createAxeCulture, updateAxeCulture, deleteAxeCulture } from '../controllers/axesCulture.js';

const router = express.Router();

router.get('/', getAxesCulture);
router.post('/', createAxeCulture);
router.get('/:id', getAxeCulture);
router.patch('/:id', updateAxeCulture);
router.delete('/:id', deleteAxeCulture);

export default router;
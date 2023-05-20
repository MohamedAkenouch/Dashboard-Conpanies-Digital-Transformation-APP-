import express from 'express';

import { getChoicesDigital, getChoiceDigital, createChoiceDigital, updateChoiceDigital, deleteChoiceDigital } from '../controllers/ChoicesDigital.js';

const router = express.Router();

router.get('/', getChoicesDigital);
router.post('/', createChoiceDigital);
router.get('/:id', getChoiceDigital);
router.patch('/:id', updateChoiceDigital);
router.delete('/:id', deleteChoiceDigital);

export default router;
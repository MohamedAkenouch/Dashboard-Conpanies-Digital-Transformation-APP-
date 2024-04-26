import express from 'express';

import { getLevelsDigital, getLevelDigital, createLevelDigital, updateLevelDigital, deleteLevelDigital } from '../controllers/levelsDigital.js';

const router = express.Router();

router.get('/', getLevelsDigital);
router.post('/', createLevelDigital);
router.get('/:id', getLevelDigital);
router.patch('/:id', updateLevelDigital);
router.delete('/:id', deleteLevelDigital);

export default router;
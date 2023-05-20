import express from 'express';

import { getInitiativesCulture, getInitiativeCulture, createInitiativeCulture, updateInitiativeCulture, deleteInitiativeCulture } from '../controllers/InitiativesCulture.js';

const router = express.Router();

router.get('/', getInitiativesCulture);
router.post('/', createInitiativeCulture);
router.get('/:id', getInitiativeCulture);
router.patch('/:id', updateInitiativeCulture);
router.delete('/:id', deleteInitiativeCulture);

export default router;
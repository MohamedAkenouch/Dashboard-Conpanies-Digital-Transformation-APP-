import express from 'express';

import { getObjectivesStrategic, getObjectiveStrategic, createObjectiveStrategic, updateObjectiveStrategic, deleteObjectiveStrategic } from '../controllers/objectivesStrategic.js';

const router = express.Router();

router.get('/', getObjectivesStrategic);
router.post('/', createObjectiveStrategic);
router.get('/:id', getObjectiveStrategic);
router.patch('/:id', updateObjectiveStrategic);
router.delete('/:id', deleteObjectiveStrategic);

export default router;
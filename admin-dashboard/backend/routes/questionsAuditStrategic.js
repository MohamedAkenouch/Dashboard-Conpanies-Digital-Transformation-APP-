import express from 'express';

import { getQuestionsAuditStrategic, getQuestionAuditStrategic, createQuestionAuditStrategic, updateQuestionAuditStrategic, deleteQuestionAuditStrategic } from '../controllers/questionsAuditStrategic.js';

const router = express.Router();

router.get('/', getQuestionsAuditStrategic);
router.post('/', createQuestionAuditStrategic);
router.get('/:id', getQuestionAuditStrategic);
router.patch('/:id', updateQuestionAuditStrategic);
router.delete('/:id', deleteQuestionAuditStrategic);

export default router;
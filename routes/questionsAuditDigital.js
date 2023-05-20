import express from 'express';

import { getQuestionsAuditDigital, getQuestionAuditDigital, createQuestionAuditDigital, updateQuestionAuditDigital, deleteQuestionAuditDigital } from '../controllers/questionsAuditStrategic.js';

const router = express.Router();

router.get('/', getQuestionsAuditDigital);
router.post('/', createQuestionAuditDigital);
router.get('/:id', getQuestionAuditDigital);
router.patch('/:id', updateQuestionAuDigital);
router.delete('/:id', deleteQuestionAuditDigital);

export default router;
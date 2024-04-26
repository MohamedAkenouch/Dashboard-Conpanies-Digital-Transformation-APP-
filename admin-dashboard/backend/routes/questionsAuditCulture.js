import express from 'express';

import { getQuestionsAuditCulture, getQuestionAuditCulture, createQuestionAuditCulture, updateQuestionAuditCulture, deleteQuestionAuditCulture } from '../controllers/questionsAuditCulture.js';

const router = express.Router();

router.get('/', getQuestionsAuditCulture);
router.post('/', createQuestionAuditCulture);
router.get('/:id', getQuestionAuditCulture);
router.patch('/:id', updateQuestionAuditCulture);
router.delete('/:id', deleteQuestionAuditCulture);

export default router;
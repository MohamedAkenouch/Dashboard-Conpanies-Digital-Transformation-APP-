import express from 'express';
import mongoose from 'mongoose';

import QuestionsAuditCultureData from '../models/questionsAuditCultureData.js';

const router = express.Router();

export const getQuestionsAuditCulture = async (req, res) => { 
    try {
        const QuestionsAuditCultureDatas = await QuestionsAuditCultureData.find();
                
        res.status(200).json(QuestionsAuditCultureDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getQuestionAuditCulture = async (req, res) => { 
    const { id } = req.params;

    try {
        const QuestionsAuditCulture = await QuestionsAuditCultureData.findById(id);
        
        res.status(200).json(QuestionsAuditCulture);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createQuestionAuditCulture = async (req, res) => {
    const { question,responsesAndniveau,axe} = req.body;

    const newQuestionAuditCulture = new QuestionsAuditCultureData({ question,responsesAndniveau,axe })

    try {
        await newQuestionAuditCulture.save();

        res.status(201).json(newQuestionAuditCulture);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateQuestionAuditCulture = async (req, res) => {
    const { id } = req.params;
    const {question,responsesAndniveau,axe } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No QuestionAuditCulture with id: ${id}`);

    const updatedQuestionAuditCulture= { question,responsesAndniveau,axe, _id: id };

    await QuestionsAuditCultureData.findByIdAndUpdate(id, updatedQuestionAuditCulture, { new: true });

    res.json(updatedQuestionAuditCulture);
}

export const deleteQuestionAuditCulture = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No QuestionAuditCulture with id: ${id}`);

    await QuestionsAuditCultureData.findByIdAndRemove(id);

    res.json({ message: "QuestionAuditCulture deleted successfully." });
}




export default router;
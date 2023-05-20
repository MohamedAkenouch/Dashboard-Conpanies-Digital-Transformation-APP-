import express from 'express';
import mongoose from 'mongoose';

import QuestionsAuditStrategicData from '../models/questionsAuditStrategicData.js';

const router = express.Router();

export const getQuestionsAuditStrategic = async (req, res) => { 
    try {
        const QuestionsAuditStrategicDatas = await QuestionsAuditStrategicData.find();
                
        res.status(200).json(QuestionsAuditStrategicDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getQuestionAuditStrategic = async (req, res) => { 
    const { id } = req.params;

    try {
        const QuestionsAuditStrategic = await QuestionsAuditStrategicData.findById(id);
        
        res.status(200).json(QuestionsAuditStrategic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createQuestionAuditStrategic = async (req, res) => {
    const { question,responsesAndscore,objective,pourcentage} = req.body;

    const newQuestionsAuditStrategic = new QuestionsAuditStrategicData({ question,responsesAndscore,objective,pourcentage })

    try {
        await newQuestionsAuditStrategic.save();

        res.status(201).json(newQuestionsAuditStrategic);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateQuestionAuditStrategic = async (req, res) => {
    const { id } = req.params;
    const { question,responsesAndscore,objective,pourcentage } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No QuestionsAuditStrategic with id: ${id}`);

    const updatedQuestionsAuditStrategic = { question,responsesAndscore,objective,pourcentage, _id: id };

    await QuestionsAuditStrategicData.findByIdAndUpdate(id, updatedQuestionsAuditStrategic, { new: true });

    res.json(updatedQuestionsAuditStrategic);
}

export const deleteQuestionAuditStrategic = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No QuestionsAuditStrategic with id: ${id}`);

    await QuestionsAuditStrategicData.findByIdAndRemove(id);

    res.json({ message: "QuestionsAuditStrategic deleted successfully." });
}




export default router;
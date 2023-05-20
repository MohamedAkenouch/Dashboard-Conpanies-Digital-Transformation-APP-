import express from 'express';
import mongoose from 'mongoose';

import InitiativeData from '../models/InitiativeData.js';

const router = express.Router();

export const getInitiatives = async (req, res) => { 
    try {
        const InitiativesDatas = await InitiativeData.find();
                
        res.status(200).json(InitiativesDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getInitiative= async (req, res) => { 
    const { id } = req.params;

    try {
        const Initiative= await InitiativeData.findById(id);
        
        res.status(200).json(Initiative);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createInitiative = async (req, res) => {
    const {Initiative , StrategicObjectives , Levels} = req.body;

    const newInitiative = new InitiativeData({Initiative , StrategicObjectives, Levels })

    try {
        await newInitiative.save();

        res.status(201).json(newInitiative);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateInitiative = async (req, res) => {
    const { id } = req.params;
    const { Initiative , StrategicObjectives , Levels } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Initiative with id: ${id}`);

    const updatedInitiative = { Initiative , StrategicObjectives,Levels , _id: id };

    await InitiativeData.findByIdAndUpdate(id, updatedInitiative, { new: true });

    res.json(updatedInitiative);
}

export const deleteInitiative = async (req, res) => {
    const { id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Initiative with id: ${id}`);

        await InitiativeData.findByIdAndRemove(id);
    
        res.json({ message: "Initiative deleted successfully." });
   

   
}




export default router;
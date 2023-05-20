import express from 'express';
import mongoose from 'mongoose';

import LevelsDigitalData from '../models/levelsDigitalData.js';

const router = express.Router();

export const getLevelsDigital = async (req, res) => { 
    try {
        const LevelsDigitalDatas = await LevelsDigitalData.find();
                
        res.status(200).json(LevelsDigitalDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getLevelDigital = async (req, res) => { 
    const { id } = req.params;

    try {
        const LevelDigital = await LevelsDigitalData.findById(id);
        
        res.status(200).json(LevelDigital);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLevelDigital = async (req, res) => {
    const {name,degree} = req.body;

    const newLevelsDigital = new LevelsDigitalData({name,degree})

    try {
        await newLevelsDigital.save();

        res.status(201).json(newLevelsDigital);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateLevelDigital = async (req, res) => {
    const { id } = req.params;
    const { name,degree } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No LevelsDigital with id: ${id}`);

    const updatedLevelsDigital = { name,degree, _id: id };

    await LevelsDigitalData.findByIdAndUpdate(id, updatedLevelsDigital, { new: true });

    res.json(updatedLevelsDigital);
}

export const deleteLevelDigital = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No LevelsDigital with id: ${id}`);

    await LevelsDigitalData.findByIdAndRemove(id);

    res.json({ message: "LevelsDigital deleted successfully." });
}




export default router;
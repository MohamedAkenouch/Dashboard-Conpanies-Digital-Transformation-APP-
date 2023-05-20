import express from 'express';
import mongoose from 'mongoose';

import AxesCultureData from '../models/axesCultureData.js';

const router = express.Router();

export const getAxesCulture = async (req, res) => { 
    try {
        const AxesCultureDatas = await AxesCultureData.find();
                
        res.status(200).json(AxesCultureDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAxeCulture = async (req, res) => { 
    const { id } = req.params;

    try {
        const AxeCulture = await AxesCultureData.findById(id);
        
        res.status(200).json(AxeCulture);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAxeCulture = async (req, res) => {
    const {axe} = req.body;

    const newAxesCulture = new AxesCultureData({axe})

    try {
        await newAxesCulture.save();

        res.status(201).json(newAxesCulture);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAxeCulture = async (req, res) => {
    const { id } = req.params;
    const { axe } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No AxesCulture with id: ${id}`);

    const updatedAxesCulture = { axe, _id: id };

    await AxesCultureData.findByIdAndUpdate(id, updatedAxesCulture, { new: true });

    res.json(updatedAxesCulture);
}

export const deleteAxeCulture = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No AxesCulture with id: ${id}`);

    await AxesCultureData.findByIdAndRemove(id);

    res.json({ message: "AxesCulture deleted successfully." });
}




export default router;
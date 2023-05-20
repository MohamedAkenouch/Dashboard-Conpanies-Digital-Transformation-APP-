import express from 'express';
import mongoose from 'mongoose';

import AxesDigitalData from '../models/axesDigitalData.js';

const router = express.Router();

export const getAxesDigital = async (req, res) => { 
    try {
        const AxesDigitalDatas = await AxesDigitalData.find();
                
        res.status(200).json(AxesDigitalDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAxeDigital = async (req, res) => { 
    const { id } = req.params;

    try {
        const AxeDigital = await AxesDigitalData.findById(id);
        
        res.status(200).json(AxeDigital);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAxeDigital = async (req, res) => {
    const {name} = req.body;

    const newAxesDigital = new AxesDigitalData({name})

    try {
        await newAxesDigital.save();

        res.status(201).json(newAxesDigital);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAxeDigital = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No AxesDigital with id: ${id}`);

    const updatedAxesDigital = { name, _id: id };

    await AxesDigitalData.findByIdAndUpdate(id, updatedAxesDigital, { new: true });

    res.json(updatedAxesDigital);
}

export const deleteAxeDigital = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No AxesDigital with id: ${id}`);

    await AxesDigitalData.findByIdAndRemove(id);

    res.json({ message: "AxesDigital deleted successfully." });
}




export default router;
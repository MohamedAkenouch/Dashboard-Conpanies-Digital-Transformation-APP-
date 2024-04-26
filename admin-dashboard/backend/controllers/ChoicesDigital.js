import express from 'express';
import mongoose from 'mongoose';

import ChoicesDigitalData from '../models/choicesDigitalData.js';

const router = express.Router();

export const getChoicesDigital = async (req, res) => { 
    try {
        const ChoicesDigitalDatas = await ChoicesDigitalData.find();
                
        res.status(200).json(ChoicesDigitalDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getChoiceDigital = async (req, res) => { 
    const { id } = req.params;

    try {
        const ChoiceDigital = await ChoicesDigitalData.findById(id);
        
        res.status(200).json(ChoiceDigital);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createChoiceDigital = async (req, res) => {
    const {name,axe_id,level_id} = req.body;

    const newChoicesDigital = new ChoicesDigitalData({name,axe_id,level_id})

    try {
        await newChoicesDigital.save();

        res.status(201).json(newChoicesDigital);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateChoiceDigital = async (req, res) => {
    const { id } = req.params;
    const { name,axe_id,level_id } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ChoicesDigital with id: ${id}`);

    const updatedChoicesDigital = { name,axe_id,level_id, _id: id };

    await ChoicesDigitalData.findByIdAndUpdate(id, updatedChoicesDigital, { new: true });

    res.json(updatedChoicesDigital);
}

export const deleteChoiceDigital = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ChoicesDigital with id: ${id}`);

    await ChoicesDigitalData.findByIdAndRemove(id);

    res.json({ message: "ChoicesDigital deleted successfully." });
}




export default router;
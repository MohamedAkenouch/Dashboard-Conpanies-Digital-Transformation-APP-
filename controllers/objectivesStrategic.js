import express from 'express';
import mongoose from 'mongoose';

import ObjectivesStrategicData from '../models/objectivesStrategicData.js';

const router = express.Router();

export const getObjectivesStrategic = async (req, res) => { 
    try {
        const ObjectivesStrategicDatas = await ObjectivesStrategicData.find();
                
        res.status(200).json(ObjectivesStrategicDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getObjectiveStrategic = async (req, res) => { 
    const { id } = req.params;

    try {
        const ObjectivesStrategic = await ObjectivesStrategicData.findById(id);
        
        res.status(200).json(ObjectivesStrategic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createObjectiveStrategic = async (req, res) => {
    const { objective} = req.body;

    const newObjectivesStrategic = new ObjectivesStrategicData({ objective })
    console.log(newObjectivesStrategic)
    try {
        await newObjectivesStrategic.save();

        res.status(201).json(newObjectivesStrategic);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateObjectiveStrategic = async (req, res) => {
    const { id } = req.params;
    const { objective } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ObjectivesStrategic with id: ${id}`);

    const updatedObjectivesStrategic = { objective, _id: id };

    await ObjectivesStrategicData.findByIdAndUpdate(id, updatedObjectivesStrategic, { new: true });

    res.json(updatedObjectivesStrategic);
}

export const deleteObjectiveStrategic = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ObjectivesStrategic with id: ${id}`);

    await ObjectivesStrategicData.findByIdAndRemove(id);

    res.json({ message: "ObjectivesStrategic deleted successfully." });
}




export default router;
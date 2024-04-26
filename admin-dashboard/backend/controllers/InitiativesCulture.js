import express from 'express';
import mongoose from 'mongoose';

import CulturalInitiatives from '../models/InitiativesCultureData.js';

const router = express.Router();

export const getInitiativesCulture = async (req, res) => { 
    try {
        const InitiativesDatas = await CulturalInitiatives.find();
                
        res.status(200).json(InitiativesDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getInitiativeCulture= async (req, res) => { 
    const { id } = req.params;

    try {
        const Initiative= await CulturalInitiatives.findById(id);
        
        res.status(200).json(Initiative);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createInitiativeCulture = async (req, res) => {
    const {cultural_axe , degree , initiatives} = req.body;

    const newInitiative = new CulturalInitiatives({cultural_axe , degree , initiatives })

    try {
        await newInitiative.save();

        res.status(201).json(newInitiative);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateInitiativeCulture = async (req, res) => {
    const { id } = req.params;
    const { cultural_axe , degree , initiatives } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Initiative with id: ${id}`);

    const updatedInitiative = { cultural_axe , degree , initiatives , _id: id };

    await CulturalInitiatives.findByIdAndUpdate(id, updatedInitiative, { new: true });

    res.json(updatedInitiative);
}

export const deleteInitiativeCulture = async (req, res) => {
    const { id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Initiative with id: ${id}`);

        await CulturalInitiatives.findByIdAndRemove(id);
    
        res.json({ message: "Initiative deleted successfully." });
   

   
}




export default router;
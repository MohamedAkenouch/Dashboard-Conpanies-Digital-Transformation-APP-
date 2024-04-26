import bcrypt from 'bcryptjs';
import User from '../models/user.js'
import mongoose from 'mongoose';

export const getUsers = async (req, res) => { 
    try {
        const UserDatas = await User.find();
                
        res.status(200).json(UserDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No expert with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "expert deleted successfully." });
}

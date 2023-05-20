import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    degree: {
        type: Number,
        required: true,
    },

})

const LevelsDigitalData = mongoose.model("levels", levelSchema);

export default LevelsDigitalData;
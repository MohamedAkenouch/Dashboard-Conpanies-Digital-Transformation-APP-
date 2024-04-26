import mongoose from 'mongoose';

const choiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    axe_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'axes'
    },
    level_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'levels'
    },
})

const ChoicesDigitalData = mongoose.model("choices", choiceSchema);

export default ChoicesDigitalData;
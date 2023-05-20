import mongoose from 'mongoose';

const AxesCultureSchema = mongoose.Schema({
    axe: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    
})

var AxesCultureData = mongoose.model('AxesCulture', AxesCultureSchema);

export default AxesCultureData;
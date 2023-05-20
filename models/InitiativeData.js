import mongoose from 'mongoose';
const InitiativeSchema = mongoose.Schema({
        Initiative: String,
        StrategicObjectives : String,
        Levels : String,
        // createdAt: {
        //     type: Date,
        //     default: new Date(),
        // },    
    
    
})

var InitiativeData = mongoose.model('Initiative', InitiativeSchema);

export default InitiativeData;
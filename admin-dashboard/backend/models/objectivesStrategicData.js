import mongoose from 'mongoose';

const ObjectivesStrategicSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date(),
    },
    objective: String
    
    
})

var ObjectivesStrategicData = mongoose.model('objectivesStrategics', ObjectivesStrategicSchema);

export default ObjectivesStrategicData;
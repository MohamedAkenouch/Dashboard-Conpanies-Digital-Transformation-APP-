import mongoose from 'mongoose';

const QuestionsAuditStrategicSchema = mongoose.Schema({
    question: String,
    responsesAndscore: [{_id:String,response:String,score:String}],
    objective: String,
    pourcentage: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    
})

var QuestionsAuditStrategicData = mongoose.model('QuestionsAuditStrategic', QuestionsAuditStrategicSchema);

export default QuestionsAuditStrategicData;
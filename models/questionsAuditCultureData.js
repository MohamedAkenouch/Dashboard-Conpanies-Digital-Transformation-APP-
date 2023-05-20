import mongoose from 'mongoose';

const QuestionsAuditCultureSchema = mongoose.Schema({
    question: String,
    responsesAndniveau: [{_id:String,response:String,niveau:String}],
    axe: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    
})

var QuestionsAuditCultureData = mongoose.model('QuestionsAuditCulture', QuestionsAuditCultureSchema);

export default QuestionsAuditCultureData;
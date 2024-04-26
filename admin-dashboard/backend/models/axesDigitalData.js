import mongoose from 'mongoose';

const axesScehema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const AxesDigitalData = mongoose.model("axes", axesScehema);

export default AxesDigitalData;
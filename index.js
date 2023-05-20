
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import questionsAuditStrategicRoutes from './routes/questionsAuditStrategic.js';
import objectivesStrategicRoutes from './routes/objectivesStrategic.js';
import questionsAuditCultureRoutes from './routes/questionsAuditCulture.js';
import axesCultureRoutes from './routes/axesCulture.js';
import axesDigitalRoutes from './routes/axesDigital.js';
import levelsDigitalRoutes from './routes/levelsDigital.js';
import choicesDigitalRoutes from './routes/choicesDigital.js';
import initiativeRoutes from './routes/initiative.js';
import initiativesCultureRoutes from './routes/initiativesCulture.js';
import userRoutes from './routes/user.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/questionsAuditStrategic', questionsAuditStrategicRoutes);
app.use('/objectivesStrategic', objectivesStrategicRoutes);
app.use('/questionsAuditCulture', questionsAuditCultureRoutes);
app.use('/axesCulture', axesCultureRoutes);
app.use('/axesDigital', axesDigitalRoutes);
app.use('/levelsDigital', levelsDigitalRoutes);
app.use('/choicesDigital', choicesDigitalRoutes);
app.use('/initiative', initiativeRoutes);
app.use('/initiativesCulture', initiativesCultureRoutes);
app.use('/users', userRoutes);



const CONNECTION_URL = 'mongodb+srv://abdelghxni:abdelghxni@cluster0.pu0up.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
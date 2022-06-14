import axios from 'axios';

const url_questionsAuditStrategic = 'http://localhost:5000/questionsAuditStrategic';
const url_objectivesStrategic = 'http://localhost:5000/objectivesStrategic';
const url_axesCulture = 'http://localhost:5000/axesCulture';
const url_questionsAuditCulture = 'http://localhost:5000/questionsAuditCulture';
const url_axesDigital = 'http://localhost:5000/axesDigital';
const url_levelsDigital = 'http://localhost:5000/levelsDigital';
const url_choicesDigital = 'http://localhost:5000/choicesDigital';
const url_Initiative = 'http://localhost:5000/initiative';
const url_InitiativesCulture = 'http://localhost:5000/initiativesCulture';
const url_users = 'http://localhost:5000/users'







export const fetchQuestionsAuditStrategic = () => axios.get(url_questionsAuditStrategic);
export const fetchQuestionAuditStrategic = (id) => axios.get(`${url_questionsAuditStrategic}/${id}`);
export const createQuestionAuditStrategic = (newquestionsAuditStrategic) => axios.post(url_questionsAuditStrategic, newquestionsAuditStrategic);
export const updateQuestionAuditStrategic = (id, updatedquestionsAuditStrategic) => axios.patch(`${url_questionsAuditStrategic}/${id}`, updatedquestionsAuditStrategic);
export const deleteQuestionAuditStrategic = (id) => axios.delete(`${url_questionsAuditStrategic}/${id}`);

export const fetchObjectivesStrategic = () => axios.get(url_objectivesStrategic);
export const fetchObjectiveStrategic = (id) => axios.get(`${url_objectivesStrategic}/${id}`);
export const createObjectiveStrategic = (newobjectivesStrategic) => axios.post(url_objectivesStrategic, newobjectivesStrategic);
export const updateObjectiveStrategic = (id, updatedobjectivesStrategic) => axios.patch(`${url_objectivesStrategic}/${id}`, updatedobjectivesStrategic);
export const deleteObjectiveStrategic = (id) => axios.delete(`${url_objectivesStrategic}/${id}`);

export const fetchAxesCulture = () => axios.get(url_axesCulture);
export const fetchAxeCulture = (id) => axios.get(`${url_axesCulture}/${id}`);
export const createAxeCulture = (newaxesCulture) => axios.post(url_axesCulture, newaxesCulture);
export const updateAxeCulture = (id, updatedaxesCulture) => axios.patch(`${url_axesCulture}/${id}`, updatedaxesCulture);
export const deleteAxeCulture = (id) => axios.delete(`${url_axesCulture}/${id}`);

export const fetchQuestionsAuditCulture = () => axios.get(url_questionsAuditCulture);
export const fetchQuestionAuditCulture = (id) => axios.get(`${url_questionsAuditCulture}/${id}`);
export const createQuestionAuditCulture = (newquestionsAuditCulture) => axios.post(url_questionsAuditCulture, newquestionsAuditCulture);
export const updateQuestionAuditCulture = (id, updatedquestionsAuditCulture) => axios.patch(`${url_questionsAuditCulture}/${id}`, updatedquestionsAuditCulture);
export const deleteQuestionAuditCulture = (id) => axios.delete(`${url_questionsAuditCulture}/${id}`);

export const fetchAxesDigital = () => axios.get(url_axesDigital);
export const fetchAxeDigital = (id) => axios.get(`${url_axesDigital}/${id}`);
export const createAxeDigital = (newaxesDigital) => axios.post(url_axesDigital, newaxesDigital);
export const updateAxeDigital = (id, updatedaxesDigital) => axios.patch(`${url_axesDigital}/${id}`, updatedaxesDigital);
export const deleteAxeDigital = (id) => axios.delete(`${url_axesDigital}/${id}`);

export const fetchLevelsDigital = () => axios.get(url_levelsDigital);
export const fetchLevelDigital = (id) => axios.get(`${url_levelsDigital}/${id}`);
export const createLevelDigital = (newlevelsDigital) => axios.post(url_levelsDigital, newlevelsDigital);
export const updateLevelDigital = (id, updatedlevelsDigital) => axios.patch(`${url_levelsDigital}/${id}`, updatedlevelsDigital);
export const deleteLevelDigital = (id) => axios.delete(`${url_levelsDigital}/${id}`);

export const fetchChoicesDigital = () => axios.get(url_choicesDigital);
export const fetchChoiceDigital = (id) => axios.get(`${url_choicesDigital}/${id}`);
export const createChoiceDigital = (newchoicesDigital) => axios.post(url_choicesDigital, newchoicesDigital);
export const updateChoiceDigital = (id, updatedchoicesDigital) => axios.patch(`${url_choicesDigital}/${id}`, updatedchoicesDigital);
export const deleteChoiceDigital = (id) => axios.delete(`${url_choicesDigital}/${id}`);

export const fetchInitiatives = () => axios.get(url_Initiative);
export const fetchInitiative = (id) => axios.get(`${url_Initiative}/${id}`);
export const createInitiative = (newinitiative) => axios.post(url_Initiative, newinitiative);
export const updateInitiative = (id, updateinitiative) => axios.patch(`${url_Initiative}/${id}`, updateinitiative);
export const deleteInitiative = (id) => axios.delete(`${url_Initiative}/${id}`);

export const fetchInitiativesCulture = () => axios.get(url_InitiativesCulture);
export const fetchInitiativeCulture = (id) => axios.get(`${url_InitiativesCulture}/${id}`);
export const createInitiativeCulture = (newinitiative) => axios.post(url_InitiativesCulture, newinitiative);
export const updateInitiativeCulture = (id, updateinitiative) => axios.patch(`${url_InitiativesCulture}/${id}`, updateinitiative);
export const deleteInitiativeCulture = (id) => axios.delete(`${url_InitiativesCulture}/${id}`);

export const fetchUsers = () => axios.get(url_users);
export const deleteUser = (id) => axios.delete(`${url_users}/${id}`);
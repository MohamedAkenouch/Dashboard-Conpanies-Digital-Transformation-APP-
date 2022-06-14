import { combineReducers } from 'redux';

import ObjectivesStrategic from './ObjectivesStrategic';
import QuestionsAuditStrategic from './QuestionsAuditStrategic';
import AxesCulture from './AxesCulture';
import QuestionsAuditCulture from './QuestionsAuditCulture';
import AxesDigital from './AxesDigital';
import LevelsDigital from './LevelsDigital';
import ChoicesDigital from './ChoicesDigital';
import Initiative from './Initiative';
import InitiativesCulture from './InitiativesCulture';
import Users from './users'

export const reducers = combineReducers({ QuestionsAuditStrategic,ObjectivesStrategic,AxesCulture,QuestionsAuditCulture,AxesDigital,LevelsDigital,ChoicesDigital , Initiative, Users,InitiativesCulture });

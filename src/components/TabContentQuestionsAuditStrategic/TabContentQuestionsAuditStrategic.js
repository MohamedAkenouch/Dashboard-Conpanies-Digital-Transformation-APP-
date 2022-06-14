import React, {useEffect,  useState} from 'react';
import styles from './TabContentQuestionsAuditStrategic.module.css';
import './TabContentQuestionsAuditStrategic.css';
import TabCardQuestionAuditStrategic from './TabCardQuestionAuditStrategic/TabCardQuestionAuditStrategic';
import Form from "../addQuestionAuditStrategic/Form";

import { getQuestionsAuditStrategic } from '../../actions/QuestionsAuditStrategic';
import { getObjectivesStrategic } from '../../actions/ObjectivesStrategic';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TabContentQuestionsAuditStrategic() {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQuestionsAuditStrategic());
        dispatch(getObjectivesStrategic());
    }, [dispatch]);

    const questionsAuditStrategic = useSelector((state) => state.QuestionsAuditStrategic);
    const objectivesStrategic  = useSelector((state) => state.ObjectivesStrategic );

    console.log(objectivesStrategic)
    

    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allQuestionsAuditStrategic" role="tab" aria-controls="home" aria-selected="false">All audit strategic Questions</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#addQuestionsAuditStrategic" role="tab" aria-controls="home" aria-selected="false">Add an audit strategic Question</a>
            </li>
        </ul>

        <div class="tab-content">
            <div className="tab-pane active" id="allQuestionsAuditStrategic" role="tabpanel" aria-labelledby="home-tab">
            <div className={styles.TabContentCard}>
                <div className='row text-center'>
                    <div className='col-sm-4'>
                        <strong>Question</strong>
                    </div>

                    <div className='col-sm-2'>
                        Pourcentage
                    </div>
                    <div className='col-sm-2'>
                        Objective
                    </div>
                    <div className='col-sm-2'>
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    questionsAuditStrategic.map( (question) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardQuestionAuditStrategic 
                                id={question._id} 
                                question={question.question}
                                responsesAndscore={question.responsesAndscore} 
                                objective={question.objective} 
                                pourcentage={question.pourcentage}
                                objectivesStrategic ={objectivesStrategic}
                                questionsAuditStrategic = {questionsAuditStrategic}
                            />
                        </>
                    ) )
                } 
            </div>
            </div>
            <div className="tab-pane" id="addQuestionsAuditStrategic" role="tabpanel" aria-labelledby="home-tab">
                    <Form objectivesStrategic ={objectivesStrategic} questionsAuditStrategic = {questionsAuditStrategic} />
            </div>
        </div>
    </div>
    );
}

export default TabContentQuestionsAuditStrategic;

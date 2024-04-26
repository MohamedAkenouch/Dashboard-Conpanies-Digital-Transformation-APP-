import React, {useEffect,  useState} from 'react';
import styles from './TabContentQuestionsAuditCulture.module.css';
import './TabContentQuestionsAuditCulture.css';
import TabCardQuestionAuditCulture from './TabCardQuestionAuditCulture/TabCardQuestionAuditCulture';
import Form from "../addQuestionAuditCulture/Form";

import { getQuestionsAuditCulture } from '../../actions/QuestionsAuditCulture';
import { getAxesCulture } from '../../actions/AxesCulture';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TabContentQuestionsAuditCulture() {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQuestionsAuditCulture());
        dispatch(getAxesCulture());
    }, [dispatch]);

    const questionsAuditCulture = useSelector((state) => state.QuestionsAuditCulture);
    const axesCulture  = useSelector((state) => state.AxesCulture );

    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allQuestionsAuditCulture" role="tab" aria-controls="home" aria-selected="false">All audit Culture Questions</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#addQuestionsAuditCulture" role="tab" aria-controls="home" aria-selected="false">Add an audit Culture Question</a>
            </li>
        </ul>

        <div class="tab-content">
            <div className="tab-pane active" id="allQuestionsAuditCulture" role="tabpanel" aria-labelledby="home-tab">
            <div className={styles.TabContentCard}>
                <div className='row text-center'>
                    <div className='col-sm-4'>
                        <strong>Question</strong>
                    </div>

                    <div className='col-sm-2'>
                        Axe
                    </div>
                    <div className='col-sm-2'>
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    questionsAuditCulture.map( (question) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardQuestionAuditCulture
                                id={question._id} 
                                question={question.question}
                                responsesAndniveau={question.responsesAndniveau} 
                                axe={question.axe} 
                                axesCulture ={axesCulture}
                                questionsAuditCulture = {questionsAuditCulture}
                            />
                        </>
                    ) )
                } 
            </div>
            </div>
            <div className="tab-pane" id="addQuestionsAuditCulture" role="tabpanel" aria-labelledby="home-tab">
                    <Form axesCulture ={axesCulture} questionsAuditCulture = {questionsAuditCulture} />
            </div>
        </div>
    </div>
    );
}

export default TabContentQuestionsAuditCulture;

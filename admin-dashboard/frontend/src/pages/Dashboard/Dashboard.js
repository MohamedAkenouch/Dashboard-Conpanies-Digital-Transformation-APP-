import React, {useState} from 'react';
import styles from './Dashboard.module.css';
import './Dashboard.css';
import { BsFillGearFill as IconDashboard } from "react-icons/bs";
import { HiUsers as IconUsers } from "react-icons/hi";
import { FaUserGraduate as IconExperts } from "react-icons/fa";
import { FaPython as IconModels } from "react-icons/fa";






import TabContentQuestionsAuditStrategic from '../../components/TabContentQuestionsAuditStrategic/TabContentQuestionsAuditStrategic';
import TabContentObjectives from '../../components/TabContentObjectives/TabContentObjectives';
import TabContentAxes from '../../components/TabContentAxes/TabContentAxes';
import TabContentAxesDigital from '../../components/TabContentAxesDigital/TabContentAxesDigital';
import TabContentLevelsDigital from '../../components/TabContentLevelsDigital/TabContentLevelsDigital';
import TabContentChoicesDigital from '../../components/TabContentChoicesDigital/TabContentChoicesDigital';
import TabContentQuestionsAuditCulture from '../../components/TabContentQuestionsAuditCulture/TabContentQuestionsAuditCulture';
import TabContentInitiatives from '../../components/TabContentInitiatives/TabContentInitiatives';
import TabContentInitiativesCulture from '../../components/TabContentInitiativesCulture/TabContentInitiativesCulture';

import TabContentUsers from '../../components/TabContentUsers/TabContentUsers';

import { Link } from 'react-router-dom';


  

function Dashboard() {
    
  return (
      <>
        <div className='container-fluid'>
            <div className='container-md'>
                <div className='row'>
                    <div className='col-sm-2 p-2 pb-3 pt-3'>
                        <Link className={styles.easyMLLink} to="/">
                            <div className={styles.easyML}>
                                {"<LOGO>"}
                            </div>
                        </Link>
                    </div>
                    <div className={styles.dashTitleBg + ' col-sm-10 p-2 pb-3 pt-3'}>
                        <div className={styles.dashTitle + " pl-5 pl-5"}>
                            <span className='mr-2 ml-2'><IconDashboard /></span> ADMIN DASHBOARD 
                        </div>
                    </div>
                </div>
            </div>




            <div className='container-md'>
                <div className='row'>
                    <div className='col-2 pt-2 pb-2 pl-4 pr-5'>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-users" role="tab" aria-controls="v-pills-users" aria-selected="true"><span className={styles.navPill}><span className='mr-2'><IconUsers /></span>Users</span></a>
                            <a className="nav-link " id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-strategic" role="tab" aria-controls="v-pills-strategic" aria-selected="false"><span className='mr-2'><IconExperts /></span>Audit strategic Questions</a>
                            <a className="nav-link " id="v-pills-profil-tab" data-toggle="pill" href="#v-pills-culture" role="tab" aria-controls="v-pills-culture" aria-selected="false"><span className='mr-2'><IconExperts /></span>Audit cultural Questions</a>
                            <a className="nav-link " id="v-pills-mess-tab" data-toggle="pill" href="#v-pills-choicesDigital" role="tab" aria-controls="v-pills-choicesDigital" aria-selected="false"><span className='mr-2'><IconModels /></span>Digital Choices</a>
                            
                            <a className="nav-link " id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-objectives" role="tab" aria-controls="v-pills-objectives" aria-selected="false"><span className='mr-2'><IconModels /></span>Objectives</a>
                            <a className="nav-link " id="v-pills-message-tab" data-toggle="pill" href="#v-pills-axes" role="tab" aria-controls="v-pills-axes" aria-selected="false"><span className='mr-2'><IconModels /></span>Culturale Axes</a>
                            <a className="nav-link " id="v-pills-messag-tab" data-toggle="pill" href="#v-pills-axesDigital" role="tab" aria-controls="v-pills-axesDigital" aria-selected="false"><span className='mr-2'><IconModels /></span>Digital Axes</a>
                            <a className="nav-link " id="v-pills-messa-tab" data-toggle="pill" href="#v-pills-levelsDigital" role="tab" aria-controls="v-pills-levelsDigital" aria-selected="false"><span className='mr-2'><IconModels /></span>Digital Levels</a>
                            
                            
                            <a className="nav-link " id="v-pills-proil-tab" data-toggle="pill" href="#v-pills-initiative" role="tab" aria-controls="v-pills-initiative" aria-selected="false"><span className='mr-2'><IconExperts /></span>Initiatives</a>
                            <a className="nav-link " id="v-pills-pril-tab" data-toggle="pill" href="#v-pills-initiativeCulture" role="tab" aria-controls="v-pills-initiativeCulture" aria-selected="false"><span className='mr-2'><IconExperts /></span>Culturale Initiatives</a>


                        </div>
                    </div>
                    <div className={styles.tabContent + ' col-10'}>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-users" role="tabpanel" aria-labelledby="v-pills-users-tab" >
                                <TabContentUsers />
                            </div>
                            <div className="tab-pane fade" id="v-pills-strategic" role="tabpanel" aria-labelledby="v-pills-strategic-tab">
                                <TabContentQuestionsAuditStrategic />
                            </div>
                            <div className="tab-pane fade" id="v-pills-objectives" role="tabpanel" aria-labelledby="v-pills-objectives-tab">
                                <TabContentObjectives />
                            </div>
                            <div className="tab-pane fade" id="v-pills-axes" role="tabpanel" aria-labelledby="v-pills-axes-tab">
                                <TabContentAxes />
                            </div>
                            <div className="tab-pane fade" id="v-pills-axesDigital" role="tabpanel" aria-labelledby="v-pills-axesDigital-tab">
                                <TabContentAxesDigital />
                            </div>
                            <div className="tab-pane fade" id="v-pills-levelsDigital" role="tabpanel" aria-labelledby="v-pills-levelsDigital-tab">
                                <TabContentLevelsDigital />
                            </div>
                            <div className="tab-pane fade" id="v-pills-choicesDigital" role="tabpanel" aria-labelledby="v-pills-choicesDigital-tab">
                                <TabContentChoicesDigital />
                            </div>
                            <div className="tab-pane fade" id="v-pills-culture" role="tabpanel" aria-labelledby="v-pills-culture-tab">
                                <TabContentQuestionsAuditCulture />
                            </div>
                            <div className="tab-pane fade" id="v-pills-initiative" role="tabpanel" aria-labelledby="v-pills-initiative-tab">
                                <TabContentInitiatives />
                            </div>
                            <div className="tab-pane fade" id="v-pills-initiativeCulture" role="tabpanel" aria-labelledby="v-pills-initiativeCulture-tab">
                                <TabContentInitiativesCulture />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='container-md'>
                <div className='row'>
                    <div className='col-sm-2 p-2 pb-5 pt-5'>
                        <div className={styles.easyML}>
                            {"<LOGO/>"}
                        </div>
                    </div>
                    <div className={styles.dashTitleBg + ' col-sm-10 p-2 pb-5 pt-5'}>
                        
                    </div>
                </div>
            </div>
        </div>


                  
      </>         
  )
}

export default Dashboard;

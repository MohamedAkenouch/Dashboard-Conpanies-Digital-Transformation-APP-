import React, {useEffect} from 'react';
import styles from './TabContentObjectives.module.css';
import './TabContentObjectives.css';
import TabCardObjective from './TabCardObjective/TabCardObjective';

import ObjecForm from '../ObjectiveForm/ObjectivesForm'

import { getObjectivesStrategic } from '../../actions/ObjectivesStrategic';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function TabContentObjectives() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getObjectivesStrategic());
    }, [dispatch]);

    const objectivesStrategic = useSelector((state) => state.ObjectivesStrategic);
    console.log(objectivesStrategic);

    
    return (
        <div className={styles.TabContentModels}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allObjectives" role="tab" aria-controls="home" aria-selected="true">All Objectives</a>
                </li>
               

                <li className="nav-item">
                    <a className="nav-link" id="messages-tab" data-toggle="tab" href="#addObjective" role="tab" aria-controls="messages" aria-selected="false">Add Objective</a>
                </li>
            </ul>

            <div class="tab-content">
                <div className="tab-pane active" id="allObjectives" role="tabpanel" aria-labelledby="home-tab">
                    <div className={styles.TabContentCard}>
                        <div className='row text-center'>
                            <div className='col-sm-4'>
                                ID
                            </div>
                            <div className='col-sm-4'>
                                Objective
                            </div>
                            
                            
                            <div className='col-sm-4'> 
                            </div>
                        </div>
                        {
                            objectivesStrategic.map( (objectiveStrategic) => (
                                <>
                                    <div className={styles.TabBorder}></div>
                                    <TabCardObjective 
                                        id={objectiveStrategic._id} 
                                        objective={objectiveStrategic.objective} 
                                        
                                    />
                                </>
                            ) )
                        }
                        
                    </div>
                </div>
                
               
                <div className="tab-pane" id="addObjective" role="tabpanel" aria-labelledby="messages-tab">
                    <ObjecForm />
                </div>
            </div>
        </div>
    );
}


export default TabContentObjectives;

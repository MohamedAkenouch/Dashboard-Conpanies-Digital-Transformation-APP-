import React, {useEffect} from 'react';
import styles from './TabContentLevelsDigital.module.css';
import './TabContentLevelsDigital.css';
import TabCardLevelDigital from './TabCardLevelDigital/TabCardLevelDigital';

import LevelDigitalForm from '../LevelDigitalForm/LevelsDigitalForm'

import { getLevelsDigital } from '../../actions/LevelsDigital';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function TabContentLevels() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLevelsDigital());
    }, [dispatch]);

    const levelsDigital = useSelector((state) => state.LevelsDigital);
    console.log(levelsDigital);

    
    return (
        <div className={styles.TabContentModels}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allLevelsDigital" role="tab" aria-controls="home" aria-selected="true">All Levels</a>
                </li>
               

                <li className="nav-item">
                    <a className="nav-link" id="messages-tab" data-toggle="tab" href="#addLevelDigital" role="tab" aria-controls="messages" aria-selected="false">Add Level</a>
                </li>
            </ul>

            <div class="tab-content">
                <div className="tab-pane active" id="allLevelsDigital" role="tabpanel" aria-labelledby="home-tab">
                    <div className={styles.TabContentCard}>
                        <div className='row text-center'>
                            <div className='col-sm-3'>
                                ID
                            </div>
                            <div className='col-sm-3'>
                                Level
                            </div>
                            <div className='col-sm-3'>
                                Degree
                            </div>
                            
                            
                            <div className='col-sm-3'> 
                            </div>
                        </div>
                        {
                            levelsDigital.map( (levelDigital) => (
                                <>
                                    <div className={styles.TabBorder}></div>
                                    <TabCardLevelDigital
                                        id={levelDigital._id} 
                                        name={levelDigital.name} 
                                        degree={levelDigital.degree} 
                                    />
                                </>
                            ) )
                        }
                        
                    </div>
                </div>
                
               
                <div className="tab-pane" id="addLevelDigital" role="tabpanel" aria-labelledby="messages-tab">
                    <LevelDigitalForm />
                </div>
            </div>
        </div>
    );
}


export default TabContentLevels;

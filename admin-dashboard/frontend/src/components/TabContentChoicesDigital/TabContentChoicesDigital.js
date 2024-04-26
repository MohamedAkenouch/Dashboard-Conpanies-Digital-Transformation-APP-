import React, {useEffect} from 'react';
import styles from './TabContentChoicesDigital.module.css';
import './TabContentChoicesDigital.css';
import TabCardChoiceDigital from './TabCardChoiceDigital/TabCardChoiceDigital';
import ChoiceDigitalForm from '../ChoiceDigitalForm/ChoicesDigitalForm'


import { getChoicesDigital} from '../../actions/ChoicesDigital';
import { getLevelsDigital} from '../../actions/LevelsDigital';
import { getAxesDigital} from '../../actions/AxesDigital';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function TabContentLevels() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLevelsDigital());
        dispatch(getChoicesDigital());
        dispatch(getAxesDigital());
    }, [dispatch]);

    const levelsDigital = useSelector((state) => state.LevelsDigital);
    const axesDigital = useSelector((state) => state.AxesDigital);
    const choicesDigital = useSelector((state) => state.ChoicesDigital);

    console.log(levelsDigital);

    
    return (
        <div className={styles.TabContentModels}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allChoicesDigital" role="tab" aria-controls="home" aria-selected="true">All Choices</a>
                </li>
               

                <li className="nav-item">
                    <a className="nav-link" id="messages-tab" data-toggle="tab" href="#addChoiceDigital" role="tab" aria-controls="messages" aria-selected="false">Add Choice</a>
                </li>
            </ul>

            <div class="tab-content">
                <div className="tab-pane active" id="allChoicesDigital" role="tabpanel" aria-labelledby="home-tab">
                    <div className={styles.TabContentCard}>
                        <div className='row text-center'>
                            <div className='col-sm-3'>
                                Choice
                            </div>
                            <div className='col-sm-3'>
                                Axe
                            </div>
                            <div className='col-sm-3'>
                                Level
                            </div>
                            
                            
                            <div className='col-sm-3'> 
                            </div>
                        </div>
                        {
                            choicesDigital.map( (choiceDigital) => (
                                <>
                                    <div className={styles.TabBorder}></div>
                                    <TabCardChoiceDigital
                                        id={choiceDigital._id} 
                                        name={choiceDigital.name} 
                                        axe_id={choiceDigital.axe_id}
                                        level_id={choiceDigital.level_id} 
                                        axesDigital={axesDigital}
                                        levelsDigital={levelsDigital}
                                    />
                                </>
                            ) )
                        }
                        
                    </div>
                </div>
                
               
                <div className="tab-pane" id="addChoiceDigital" role="tabpanel" aria-labelledby="messages-tab">
                    <ChoiceDigitalForm />
                </div>
            </div>
        </div>
    );
}


export default TabContentLevels;

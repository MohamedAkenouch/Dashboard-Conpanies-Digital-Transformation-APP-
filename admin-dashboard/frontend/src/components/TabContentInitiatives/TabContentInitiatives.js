import React, {useEffect} from 'react';
import styles from './TabContentInitiatives.module.css';
import './TabContentInitiatives.css';
import TabCardInitiative from './TabCardInitiative/TabCardInitiative';

import Form from "../../components/addInitiative/Form";

import { getInitiatives } from '../../actions/Initiative';
import { getObjectivesStrategic } from '../../actions/ObjectivesStrategic';
import { getLevelsDigital } from '../../actions/LevelsDigital';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



function TabContentInitiatives() {
    


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInitiatives());
        dispatch(getObjectivesStrategic());
        dispatch(getLevelsDigital());
    }, [dispatch]);

    const initiatives = useSelector((state) => state.Initiative);
    const Objectiveslist = useSelector((state) => state.ObjectivesStrategic);
    const levelslist = useSelector((state) => state.LevelsDigital);
    

    

    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allBlogs" role="tab" aria-controls="home" aria-selected="true">All Initiatives</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#addInitiative" role="tab" aria-controls="home" aria-selected="true">Add an Initiative</a>
            </li>
        </ul>

        <div class="tab-content">
            <div className="tab-pane active" id="allBlogs" role="tabpanel" aria-labelledby="home-tab">
            <div className={styles.TabContentCard}>
                <div className='row text-center'>
                    <div className='col-sm-3'>
                        Title
                    </div>
                    <div className='col-sm-3'>
                        STRATEGIC OBJECTIVS
                    </div>
                    <div className='col-sm-3'>
                        LEVELS
                    </div>
                    <div className='col-sm-3 text-center'>
                    </div>
                </div>
                {
                   initiatives.map( (initiative) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardInitiative
                                id={initiative._id} 
                                title={initiative.Initiative} 
                                strategicObjectives={initiative.StrategicObjectives}
                                levels={initiative.Levels}
                                initiatives={initiatives}
                                Objectiveslist={Objectiveslist}
                                levelslist={levelslist}
                            />
                            
                            
                        </>
                    ) )
                   } 
                   
            </div>
            </div>

            <div className="tab-pane" id="addInitiative" role="tabpanel" aria-labelledby="home-tab">
                    <Form
                    Objectiveslist={Objectiveslist}
                    levelslist={levelslist}
                    />
            </div>

            
            
        </div>
    </div>
    );
}


export default TabContentInitiatives;

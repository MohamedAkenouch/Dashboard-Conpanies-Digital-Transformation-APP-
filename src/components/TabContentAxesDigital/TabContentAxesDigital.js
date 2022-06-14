import React, {useEffect} from 'react';
import styles from './TabContentAxesDigital.module.css';
import './TabContentAxesDigital.css';
import TabCardAxeDigital from './TabCardAxeDigital/TabCardAxeDigital';

import AxeDigitalForm from '../AxeDigitalForm/AxesDigitalForm'

import { getAxesDigital } from '../../actions/AxesDigital';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function TabContentAxes() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAxesDigital());
    }, [dispatch]);

    const axesDigital = useSelector((state) => state.AxesDigital);
    console.log(axesDigital);

    
    return (
        <div className={styles.TabContentModels}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allAxesDigital" role="tab" aria-controls="home" aria-selected="true">All Axes</a>
                </li>
               

                <li className="nav-item">
                    <a className="nav-link" id="messages-tab" data-toggle="tab" href="#addAxeDigital" role="tab" aria-controls="messages" aria-selected="false">Add Axe</a>
                </li>
            </ul>

            <div class="tab-content">
                <div className="tab-pane active" id="allAxesDigital" role="tabpanel" aria-labelledby="home-tab">
                    <div className={styles.TabContentCard}>
                        <div className='row text-center'>
                            <div className='col-sm-4'>
                                ID
                            </div>
                            <div className='col-sm-4'>
                                Axe
                            </div>
                            
                            
                            <div className='col-sm-4'> 
                            </div>
                        </div>
                        {
                            axesDigital.map( (axeDigital) => (
                                <>
                                    <div className={styles.TabBorder}></div>
                                    <TabCardAxeDigital
                                        id={axeDigital._id} 
                                        axeDigital={axeDigital.name} 
                                        
                                    />
                                </>
                            ) )
                        }
                        
                    </div>
                </div>
                
               
                <div className="tab-pane" id="addAxeDigital" role="tabpanel" aria-labelledby="messages-tab">
                    <AxeDigitalForm />
                </div>
            </div>
        </div>
    );
}


export default TabContentAxes;

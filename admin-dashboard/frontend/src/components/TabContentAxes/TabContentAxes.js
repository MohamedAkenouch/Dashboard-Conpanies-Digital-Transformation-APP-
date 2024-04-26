import React, {useEffect} from 'react';
import styles from './TabContentAxes.module.css';
import './TabContentAxes.css';
import TabCardAxe from './TabCardAxe/TabCardAxe';

import AxeForm from '../AxeForm/AxesForm'

import { getAxesCulture } from '../../actions/AxesCulture';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function TabContentAxes() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAxesCulture());
    }, [dispatch]);

    const axesCulture = useSelector((state) => state.AxesCulture);
    console.log(axesCulture);

    
    return (
        <div className={styles.TabContentModels}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allAxes" role="tab" aria-controls="home" aria-selected="true">All Axes</a>
                </li>
               

                <li className="nav-item">
                    <a className="nav-link" id="messages-tab" data-toggle="tab" href="#addAxe" role="tab" aria-controls="messages" aria-selected="false">Add Axe</a>
                </li>
            </ul>

            <div class="tab-content">
                <div className="tab-pane active" id="allAxes" role="tabpanel" aria-labelledby="home-tab">
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
                            axesCulture.map( (axeCulture) => (
                                <>
                                    <div className={styles.TabBorder}></div>
                                    <TabCardAxe
                                        id={axeCulture._id} 
                                        axe={axeCulture.axe} 
                                        
                                    />
                                </>
                            ) )
                        }
                        
                    </div>
                </div>
                
               
                <div className="tab-pane" id="addAxe" role="tabpanel" aria-labelledby="messages-tab">
                    <AxeForm />
                </div>
            </div>
        </div>
    );
}


export default TabContentAxes;

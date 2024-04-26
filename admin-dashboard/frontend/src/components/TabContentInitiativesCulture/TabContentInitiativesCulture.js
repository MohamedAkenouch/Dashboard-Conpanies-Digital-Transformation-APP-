import React, {useEffect,  useState} from 'react';
import styles from './TabContentInitiativesCulture.module.css';
import './TabContentInitiativesCulture.css';
import TabCardInitiativeCulture from './TabCardInitiativeCulture/TabCardInitiativeCulture';
import Form from "../addInitiativeCulture/Form";

import { getInitiativesCulture } from '../../actions/InitiativesCulture';
import { getAxesCulture } from '../../actions/AxesCulture';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TabContentInitiativesCulture() {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInitiativesCulture());
        dispatch(getAxesCulture());
    }, [dispatch]);

    const initiativesCulture = useSelector((state) => state.InitiativesCulture);
    const axesCulture  = useSelector((state) => state.AxesCulture );

    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allCulture" role="tab" aria-controls="home" aria-selected="false">All culturale initiatives</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#addCulture" role="tab" aria-controls="home" aria-selected="false">Add culturale initiative </a>
            </li>
        </ul>

        <div class="tab-content">
            <div className="tab-pane active" id="allCulture" role="tabpanel" aria-labelledby="home-tab">
            <div className={styles.TabContentCard}>
                <div className='row text-center'>
                    <div className='col-sm-4'>
                        <strong>Cultural axe</strong>
                    </div>

                    <div className='col-sm-2'>
                        Degree
                    </div>
                    <div className='col-sm-2'>
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    initiativesCulture.map( (ini) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardInitiativeCulture
                                id={ini._id} 
                                cultural_axe={ini.cultural_axe}
                                initiatives={ini.initiatives} 
                                degree={ini.degree} 
                                axesCulture ={axesCulture}
                            
                            />
                        </>
                    ) )
                } 
            </div>
            </div>
            <div className="tab-pane" id="addCulture" role="tabpanel" aria-labelledby="home-tab">
                    <Form axesCulture ={axesCulture}  />
            </div>
        </div>
    </div>
    );
}

export default TabContentInitiativesCulture;

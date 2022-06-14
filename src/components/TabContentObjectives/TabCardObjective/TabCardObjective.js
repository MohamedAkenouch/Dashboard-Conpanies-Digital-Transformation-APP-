import React, {useEffect} from 'react';
import styles from './TabCardObjective.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";


import { getObjectiveStrategic, deleteObjectiveStrategic } from '../../../actions/ObjectivesStrategic';




function TabCardObjective({id, objective}) {
    

    const dispatch = useDispatch();
    
    const deleteM = () => {
        dispatch(deleteObjectiveStrategic(id));
    }

    return (
        <div className={styles.TabCardModel}>
            <div className='row text-center'>
                <div className='col-sm-4'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-4'>
                    <pre>{objective}</pre>
                </div>
                <div className='col-sm-4'>
                    <button onDoubleClick={ () => deleteM() } className={styles.deleteModel}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardObjective;

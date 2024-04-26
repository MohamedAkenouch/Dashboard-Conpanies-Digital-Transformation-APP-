import React, {useEffect} from 'react';
import styles from './TabCardLevelDigital.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";


import { deleteLevelDigital} from '../../../actions/LevelsDigital';




function TabCardLevelDigital({id, name,degree}) {
    

    const dispatch = useDispatch();
    
    const deleteM = () => {
        dispatch(deleteLevelDigital(id));
    }

    return (
        <div className={styles.TabCardModel}>
            <div className='row text-center'>
                <div className='col-sm-3'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-3'>
                    <pre>{name}</pre>
                </div>
                <div className='col-sm-3'>
                    <pre>{degree}</pre>
                </div>
                <div className='col-sm-3'>
                    <button onDoubleClick={ () => deleteM() } className={styles.deleteModel}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardLevelDigital;

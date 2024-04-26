import React, {useEffect} from 'react';
import styles from './TabCardAxeDigital.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";


import { getAxesDigital, deleteAxeDigital} from '../../../actions/AxesDigital';




function TabCardAxeDigital({id, axeDigital}) {
    

    const dispatch = useDispatch();
    
    const deleteM = () => {
        dispatch(deleteAxeDigital(id));
    }

    return (
        <div className={styles.TabCardModel}>
            <div className='row text-center'>
                <div className='col-sm-4'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-4'>
                    <pre>{axeDigital}</pre>
                </div>
                <div className='col-sm-4'>
                    <button onDoubleClick={ () => deleteM() } className={styles.deleteModel}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardAxeDigital;

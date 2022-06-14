import React, {useEffect} from 'react';
import styles from './TabCardAxe.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";


import { getAxesCulture, deleteAxeCulture} from '../../../actions/AxesCulture';




function TabCardAxe({id, axe}) {
    

    const dispatch = useDispatch();
    
    const deleteM = () => {
        dispatch(deleteAxeCulture(id));
    }

    return (
        <div className={styles.TabCardModel}>
            <div className='row text-center'>
                <div className='col-sm-4'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-4'>
                    <pre>{axe}</pre>
                </div>
                <div className='col-sm-4'>
                    <button onDoubleClick={ () => deleteM() } className={styles.deleteModel}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardAxe;

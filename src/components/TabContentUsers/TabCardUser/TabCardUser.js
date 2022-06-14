import React, {useEffect} from 'react';
import styles from './TabCardUser.module.css';

import { deleteUser } from '../../../actions/Users';

import { useDispatch } from "react-redux";


function TabCardUser({id,  email, name}) {

    const dispatch = useDispatch();
    const deleteU = () => {
        dispatch(deleteUser(id));
    }

    return (
        <div className={styles.TabCardUser}>
            <div className='row text-center'>
                <div className='col-sm-3'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{name}</pre>
                </div>
                
                <div className='col-sm-3'>
                    <pre>{email}</pre>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={ () => deleteU()} className={styles.deleteUser}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardUser;

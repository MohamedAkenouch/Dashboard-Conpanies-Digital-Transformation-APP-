import React, {useEffect} from 'react';
import styles from './TabContentUsers.module.css';
import './TabContentUsers.css';
import TabCardUser from './TabCardUser/TabCardUser';

import { getUsers } from '../../actions/Users';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TabContentUsers() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state) => state.Users);




    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs nav-tabs-users" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allUsers" role="tab" aria-controls="home" aria-selected="true">All Users</a>
            </li>
        </ul>

        <div class="tab-content">
            <div className="tab-pane active" id="allUsers" role="tabpanel" aria-labelledby="home-tab">
            <div className={styles.TabContentCard}>
                <div className='row text-center'>
                    <div className='col-sm-3'>
                        ID
                    </div>
                    <div className='col-sm-2'>
                       Name
                    </div>

                    <div className='col-sm-3'>
                        Email
                    </div>

                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    users.map( (user) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardUser 
                                id={user._id} 
                                name={user.name}

                                email={user.email} 
                            />
                        </>
                    ) )
                } 
            </div>
            </div>
        </div>
    </div>
    );
}


export default TabContentUsers;

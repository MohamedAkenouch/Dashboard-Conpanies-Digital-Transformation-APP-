import React, {useEffect ,  useState} from 'react';
import styles from './TabCardInitiative.module.css';
import { TextField, Button, Typography, Paper,FormControlLabel , FormGroup} from '@material-ui/core';
import Collapse from "react-bootstrap/Collapse";
import { deleteInitiative , updateInitiative  } from '../../../actions/Initiative';

import { useDispatch } from "react-redux";





function TabCardInitiative({id, title, strategicObjectives, levels,initiatives,Objectiveslist,levelslist}) {
    const [InitiativeData, setInitiativeData] = useState({ Initiative:title, StrategicObjectives: strategicObjectives,Levels:levels});
    
    
    
    // const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    // console.log(fullUrl);
    const strLevels = levels.split(',');
    const strObjectives = strategicObjectives.split(',')
    const StyleChecked = {
        marginLeft: '10px',
        color:'blue'
      };
    
      const StyleNotChecked = {
        marginLeft: '10px',
      };

    const dispatch = useDispatch();
    const deleteB = () => {
        dispatch(deleteInitiative(id));
    }
    
    const [open, setOpen] = useState(false);

    const [updateButton, setupdateButton] = useState(false);

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(updateInitiative(id,InitiativeData));

    };


    const [checked, setChecked] = useState([]);


    const handleCheck = (event) => {
    
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        //console.log(updatedList)
    
        setChecked(updatedList)
        //console.log(checked)
        // Generate string of checked items
          var checkedItems = updatedList.length
        ? updatedList.reduce((total, item) => {
            return total + "," + item;
          })
        : "";
          setInitiativeData({ ...InitiativeData, StrategicObjectives: checkedItems});
          //console.log(InitiativeData)
    
        
        
    
      };

// Return classes based on whether item is checked
var isChecked = (item) =>
checked.includes(item) ? true : false;

const [checkedLv, setCheckedLv] = useState([]);
  


// Generate string of checked items
var checkedLevels = checkedLv.length
? checkedLv.reduce((total, item) => {
     return total + "," + item;
   })
 : "";

  // Add/Remove checked item from list
  const handleCheckLv = (event) => {
    var updatedList = [...checkedLv];
    if (event.target.checked) {
      updatedList = [...checkedLv, event.target.value];
    } else {
      updatedList.splice(checkedLv.indexOf(event.target.value), 1);
    }
    setCheckedLv(updatedList);


    // Generate string of checked items
    var checkedLevels = updatedList.length
     ? updatedList.reduce((total, item) => {
          return total + "," + item;
        })
      : "";
    setInitiativeData({ ...InitiativeData, Levels: checkedLevels});

  };
  var isCheckedLv = (item) =>
checkedLv.includes(item) ? true : false;




    return (
        <div>
        <div className={styles.TabCardInitiative}>
            <div className='row text-center'>
                
                <div className='col-sm-3'>
                   <pre> {title}</pre>
                </div>
                
                <div className='col-sm-3'>
                    <pre>
                    {
                       strObjectives.map( (Objective) => (
                                <>
                                    
                                    <li>{Objective}</li>
                                    
                                </>
                            ) )
                        } 
                    </pre>
                </div>
                <div className='col-sm-3'>
                    <pre>
                    {
                       strLevels.map( (level) => (
                                <>
                                    
                                    <li>{level}</li>
                                    
                                </>
                            ) )
                        } 
                    </pre>
                </div>
                
                <div className='col-sm-3'>
                    <button onDoubleClick={ () => deleteB()} className={styles.deleteInitiative}>Delete</button>
                    {/* <a href="addInitiative" className={styles.updateInitiative}>Edit</a> */}
                    <button className={styles.updateInitiative} type="button" onClick={() => setOpen(!open)} aria-controls={"edit"+id} aria-expanded={open}>Edit</button>
                </div>

                <Collapse in={open}>
                <form  onSubmit={handleSubmit}>
                <div id={"edit"+id} class="card card-body">
                <div className='row text-center' style={{marginBottom:'20px'}}>
                    <div className='col-sm-6'>
                        <div style={{display :"inline-block"}}>  
                            <div className="Objectiveslist">
                                <div className="title">Strategic Objectives:</div>
                                <div className="list-container" >
                                    {Objectiveslist.map((item, index) => (
                                    <div key={index}>
                                        <input value={item.objective} type="checkbox" onChange={handleCheck}/>
                                        <span style={isChecked(item.objective) ? StyleChecked : StyleNotChecked}>{item.objective}</span>
                                        
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="LevelsList">
                            <div className="title">Digital Levels</div>
                            <div className="list-container" >
                            {levelslist.map((item, index) => (
                                <div key={index}>
                                <input value={item.name} type="checkbox" onChange={handleCheckLv}/>
                                <span style={isCheckedLv(item.name) ? StyleChecked : StyleNotChecked}>{item.name}</span>
                                
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <Button className={styles.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth >Submit</Button>



                    


                </div>

                    
                    
                </form>
                </Collapse>
                
            
        
            </div>
            
        </div>
        
        </div>

        
    );
}


export default TabCardInitiative;

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper,FormControlLabel , FormGroup} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createInitiative } from '../../actions/Initiative';
import {  useLocation,useNavigate } from 'react-router-dom';

const Form = ({Objectiveslist,levelslist}) => {
  const [InitiativeData, setInitiativeData] = useState({ Initiative: '', StrategicObjectives: '',Levels: ''});
  
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const StyleChecked = {
    marginLeft: '10px',
    color:'blue'
  };

  const StyleNotChecked = {
    marginLeft: '10px',
  };
  console.log(Objectiveslist)


  const handleSubmit = async (e) => {
    console.log(InitiativeData)
      e.preventDefault();
      dispatch(createInitiative(InitiativeData));
  };




  const [checked, setChecked] = useState([]);


  // Add/Remove checked item from list
  const handleCheck = (event) => {
    
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    console.log(updatedList)

    setChecked(updatedList)
    console.log(checked)
    // Generate string of checked items
      var checkedItems = updatedList.length
    ? updatedList.reduce((total, item) => {
        return total + "," + item;
      })
    : "";
      setInitiativeData({ ...InitiativeData, StrategicObjectives: checkedItems});
      console.log(InitiativeData)

    
    

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


  
  

// Return classes based on whether item is checked
var isCheckedLv = (item) =>
checkedLv.includes(item) ? true : false;


    
  return (
    <div className='container-md'>
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{'Add Initiative'}</Typography>
        <TextField name="initiative" variant="outlined" label="title" className={`${classes.input}`} value={InitiativeData.Initiative} onChange={(e) =>{setInitiativeData({ ...InitiativeData, Initiative: e.target.value }); }  } />
        {/* <TextField name="objectives" variant="outlined" label="StrategicObjectives" className={`${classes.input}`}  multiline rows={10} value={InitiativeData.StrategicObjectives} onChange={(e) => setInitiativeData({ ...InitiativeData, StrategicObjectives: e.target.value })} /> */}
        {/* <TextField name="levels" variant="outlined" label="levels" className={`${classes.input}`}  multiline rows={1} value={InitiativeData.Levels} onChange={(e) => {setInitiativeData({ ...InitiativeData, Levels: e.target.value }) ;}} /> */}
          
        <div className='row text-center' style={{width:'200%',marginBottom:'20px'}}>
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
        



        
          
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth >Submit</Button>
        
      </form>
      <div>
        
      </div>
      <div>
      </div>
    </Paper>

    </div>
    
  );


  
};

export default Form;

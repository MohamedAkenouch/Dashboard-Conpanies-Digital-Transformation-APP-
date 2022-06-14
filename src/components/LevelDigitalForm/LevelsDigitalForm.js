import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createLevelDigital} from '../../actions/LevelsDigital';
function LevelDigitalForm  ()  {
  const [levelDigitalData, setLevelDigitalData] = useState({ name: '',degree:''});
  const dispatch = useDispatch();
  const classes = useStyles();



 



  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createLevelDigital(levelDigitalData));
    

  };
  
  



  return (
    
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{'Add level Digital'}</Typography>
          <center>
            <TextField className={`${classes.textField}`}  name="level" variant="outlined" label="Level"  value={levelDigitalData.name} onChange={(e) => setLevelDigitalData({ ...levelDigitalData, name: e.target.value })} />
            <TextField className={`${classes.textField}`} name="degree" type="number" variant="outlined" label="Degree"  value={levelDigitalData.degree} onChange={(e) => setLevelDigitalData({ ...levelDigitalData, degree: e.target.value })} />
          </center>
          
          <Button className={classes.buttonSubmit} variant="contained" color="primary"  type="submit" fullWidth >Submit</Button>
        </form>
      </Paper>
    
    
  );
};

export default LevelDigitalForm;

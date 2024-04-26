import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createObjectiveStrategic} from '../../actions/ObjectivesStrategic';
function ObjecForm  ()  {
  const [objectiveData, setObjectiveData] = useState({ objective: ''});
  const dispatch = useDispatch();
  const classes = useStyles();



 



  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createObjectiveStrategic(objectiveData));
    

  };
  
  



  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{'Add objective'}</Typography>
        <TextField  name="objective" variant="outlined" label="Objective" className={`${classes.textField}`} value={objectiveData.objective} onChange={(e) => setObjectiveData({ ...objectiveData, objective: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
      </form>
    </Paper>
  );
};

export default ObjecForm;

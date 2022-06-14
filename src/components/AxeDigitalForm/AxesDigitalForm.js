import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createAxeDigital} from '../../actions/AxesDigital';
function AxeDigitalForm  ()  {
  const [axeDigitalData, setAxeDigitalData] = useState({ name: ''});
  const dispatch = useDispatch();
  const classes = useStyles();



 



  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createAxeDigital(axeDigitalData));
    

  };
  
  



  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{'Add Axe Digital'}</Typography>
        <TextField  name="axe" variant="outlined" label="Axe" className={`${classes.textField}`} value={axeDigitalData.name} onChange={(e) => setAxeDigitalData({ ...axeDigitalData, name: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
      </form>
    </Paper>
  );
};

export default AxeDigitalForm;

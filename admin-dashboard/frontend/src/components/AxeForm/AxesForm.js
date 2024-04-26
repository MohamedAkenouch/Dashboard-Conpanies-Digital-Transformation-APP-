import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createAxeCulture} from '../../actions/AxesCulture';
function AxeForm  ()  {
  const [axeData, setAxeData] = useState({ axe: ''});
  const dispatch = useDispatch();
  const classes = useStyles();



 



  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createAxeCulture(axeData));
    

  };
  
  



  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{'Add Axe'}</Typography>
        <TextField  name="axe" variant="outlined" label="Axe" className={`${classes.textField}`} value={axeData.axe} onChange={(e) => setAxeData({ ...axeData, axe: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
      </form>
    </Paper>
  );
};

export default AxeForm;

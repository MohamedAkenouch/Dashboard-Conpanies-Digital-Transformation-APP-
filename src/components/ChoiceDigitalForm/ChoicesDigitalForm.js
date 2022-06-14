import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useStyles from './styles';
import { createChoiceDigital} from '../../actions/ChoicesDigital';
import { getLevelsDigital} from '../../actions/LevelsDigital';
import { getAxesDigital} from '../../actions/AxesDigital';

function ChoiceDigitalForm  ()  {
  const [choiceDigitalData, setChoiceDigitalData] = useState({ name: '',axe_id:'',level_id:''});
  const dispatch = useDispatch();
  const classes = useStyles();
    useEffect(() => {
        dispatch(getLevelsDigital());
        dispatch(getAxesDigital());
    }, [dispatch]);

    const levelsDigital = useSelector((state) => state.LevelsDigital);
    const axesDigital = useSelector((state) => state.AxesDigital);




 



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(choiceDigitalData)
    dispatch(createChoiceDigital(choiceDigitalData));
    

  };
  
  



  return (
    
      <Paper className={classes.paper}>
        <div class="card card-body" >
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{'Add Choice Digital'}</Typography>
            <TextField  name="choice" variant="outlined" label="Choice" className={`${classes.textField}`}  value={choiceDigitalData.name} onChange={(e) => setChoiceDigitalData({ ...choiceDigitalData, name: e.target.value })} />
            <FormControl sx={{ m: 1, minWidth: 200 }} className={`${classes.textField}`}> 
                <InputLabel htmlFor="grouped-native-select">Axes</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Axes" onChange={(e) => setChoiceDigitalData({ ...choiceDigitalData, axe_id: e.target.value })}>
                  <option></option>
                   { 
                   axesDigital != null && axesDigital != undefined ?
                   axesDigital.map((axe) => (
                   <><option value={axe._id}>{axe.name}</option>
                   </>
                   ))
                   : null
                      }
                  </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 200 }} className={`${classes.textField}`}>
                <InputLabel htmlFor="grouped-native-select">Levels</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Levels" onChange={(e) => setChoiceDigitalData({ ...choiceDigitalData, level_id: e.target.value })}>
                  <option></option>
                   { 
                   levelsDigital != null && levelsDigital != undefined ?
                   levelsDigital.map((level) => (
                   <><option value={level._id}>{level.name}</option>
                   </>
                   ))
                   : null
                      }
                  </Select>
              </FormControl>
          <Button className={classes.buttonSubmit} variant="contained" color="primary"  type="submit" fullWidth >Submit</Button>
        </form>
        </div>
      </Paper>
    
    
  );
};

export default ChoiceDigitalForm;

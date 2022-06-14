import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation,useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Paper,FormControlLabel , FormGroup} from '@material-ui/core';

import { v4 as uuidv4 } from 'uuid';

import { createInitiativeCulture } from '../../actions/InitiativesCulture';





const Form = ({axesCulture}) => {
  const classes = useStyles()
  
    const dispatch = useDispatch();
    
    let error ='';
    let succes = '';
    const StyleChecked = {
      marginLeft: '10px',
      color:'blue'
    };
  
    const StyleNotChecked = {
      marginLeft: '10px',
    };








    
    const [initiatives1,setInitiatives1 ] = useState([
      { id: uuidv4(), initiative: ''},
    ]);

    const [ini, setIni] = useState({ cultural_axe: '', initiatives:[], degree:0 });
  








    const handleSubmit = (e) => {
      e.preventDefault();
        console.log(ini)
        dispatch(createInitiativeCulture(ini))
    };
  
    const handleChangeInput = (id, event) => {
      const newInitiatives1= initiatives1.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })

      setInitiatives1(newInitiatives1);
       setIni({ ...ini, initiatives: initiatives1 })
       console.log(ini.initiatives)

    }
  
    const handleAddFields = () => {
      setInitiatives1([...initiatives1, { id: uuidv4(),   initiative: '' }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...initiatives1];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInitiatives1(values);
    }

  








  return (
            
                <>
      <div className='container-md'>
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{'Add culturale initiatives'}</Typography>
            
              <FormControl sx={{ m: 1, minWidth: 200 }} style={{width:'200%'}}>
                <InputLabel htmlFor="grouped-native-select">Culturale Axes</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Culturale Axes" onChange={(e) => setIni({ ...ini, cultural_axe: e.target.value })} >
                   <option></option>
                   { 
                   axesCulture != null && axesCulture != undefined ?
                   axesCulture.map((axe) => (
                   <><option value={axe.axe}>{axe.axe}</option>
                   </>
                   ))
                   : null
                      }
                  </Select>
              </FormControl>
              <TextField style={{width:'200%'}}
              name="degree"
              label="Degree"
              variant="outlined"
              type="number"
              value={ini.degree}
              onChange={(e) => setIni({ ...ini, degree: e.target.value })}
            />
        { initiatives1.map(initiative => (
          <div style={{width:'200%'}} key={initiative.id}>
            <TextField style={{width:'85%'}}
              name="initiative"
              label="Initiative"
              variant="outlined"
              value={initiatives1.initiative}
              onChange={event => handleChangeInput(initiative.id, event)}
            />
            <IconButton disabled={initiatives1.length === 1} onClick={() => handleRemoveFields(initiative.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth
          onClick={handleSubmit}
        >Save</Button>
        </form>
        </Paper>
      </div>
      
      
     


          </>
    
  );
};

export default Form;

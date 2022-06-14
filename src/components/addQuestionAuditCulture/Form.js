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

import { updateQuestionAuditCulture} from '../../actions/QuestionsAuditCulture';
import { createQuestionAuditCulture } from '../../actions/QuestionsAuditCulture';





const Form = ({axesCulture,questionsAuditSCulture}) => {
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








    const [responses,setResponses ] = useState([
      { id: uuidv4(), response: '', responsesAndniveau: '' },
    ]);
    const [Question, setQuestion] = useState(
      {question: '', axe:'', responsesAndniveau:[] }
    );
  








    const handleSubmit = (e) => {
      e.preventDefault();
        console.log(Question)
        dispatch(createQuestionAuditCulture(Question))
    };
  
    const handleChangeInput = (id, event) => {
      const newResponses = responses.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
      
      setResponses(newResponses);
      setQuestion({ ...Question, responsesAndniveau: responses })

    }
  
    const handleAddFields = () => {
      setResponses([...responses, { id: uuidv4(),   response: '', niveau: '' }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...responses];
      values.splice(values.findIndex(value => value.id === id), 1);
      setResponses(values);
    }

  








  return (
            
                <>
      <div className='container-md'>
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{'Add Question'}</Typography>
            <TextField style={{width:'200%'}}
              name="question"
              label="Question"
              variant="outlined"
              value={Question.question}
              onChange={(e) => setQuestion({ ...Question, question: e.target.value })}
            />
              <FormControl sx={{ m: 1, minWidth: 200 }} style={{width:'200%'}}>
                <InputLabel htmlFor="grouped-native-select">Axes</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Axes" onChange={(e) => setQuestion({ ...Question, axe: e.target.value })} >
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

        { responses.map(response => (
          <div style={{width:'200%'}} key={response.id}>
            <TextField style={{width:'40%'}}
              name="response"
              label="Response"
              variant="outlined"
              value={responses.response}
              onChange={event => handleChangeInput(response.id, event)}
            />
            <TextField style={{width:'40%'}}
              name="niveau"
              label="Niveau"
              variant="outlined"
              value={responses.score}
              onChange={event => handleChangeInput(response.id, event)}
            />
            <IconButton disabled={responses.length === 1} onClick={() => handleRemoveFields(response.id)}>
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

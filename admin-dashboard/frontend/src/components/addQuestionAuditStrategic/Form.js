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

import { updateQuestionAuditStrategic} from '../../actions/QuestionsAuditStrategic';
import { createQuestionAuditStrategic } from '../../actions/QuestionsAuditStrategic';
import { paperClasses } from '@mui/material';





const Form = ({objectivesStrategic,questionsAuditStrategic}) => {
    const classes = useStyles()
  
    const dispatch = useDispatch();
    
    
    const StyleChecked = {
      marginLeft: '10px',
      color:'blue'
    };
  
    const StyleNotChecked = {
      marginLeft: '10px',
    };

    const [error,setError] = useState('');
    const  [succes, setSucces ] =useState('') ;
    const  [counter, setCounter ] =useState(0) ;






    const [responses,setResponses ] = useState([
      { id: uuidv4(), response: '', score: '' },
    ]);
    const [Question, setQuestion] = useState(
      {question: '', pourcentage: '', objective:'', responsesAndscore:[] }
    );
    const [prcgedit, setPrcgedit] = useState([]);
  








  
    const handleChangeInput = (id, event) => {
      const newResponses = responses.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
      
      setResponses(newResponses);
      setQuestion({ ...Question, responsesAndscore: responses })

    }
  
    const handleAddFields = () => {
      setResponses([...responses, { id: uuidv4(),   response: '', score: '' }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...responses];
      values.splice(values.findIndex(value => value.id === id), 1);
      setResponses(values);
    }

    

    
    const Succes = text => {
      setSucces(text)
    }

    const handleSubmitPrcg =(e) => {
      e.preventDefault();
      if(!questionsAuditStrategic.find(questionAuditStrategic => questionAuditStrategic.question ===Question.question)){
          if(Number(Question.pourcentage)<=100 && 0<=Number(Question.pourcentage)<=100){
            
            dispatch(createQuestionAuditStrategic(Question));
            if(prcgedit.length!=0){
              prcgedit.map( quest =>
                    dispatch(updateQuestionAuditStrategic(quest._id,quest))
                  );
            }
            Succes( 'Question edited successfully');
          } else{
            setError('Pourcentage must be a number beteween 0 and 100') ;
          }
           
      } else{
        setError('Question already exist') ;
        
      } 
      
    };



    const validQuestion =(e)  => {
          setQuestion({ ...Question, question: e.target.value })

      }
    
      const validPourcentage =(e)  => {
        
        
            setQuestion({ ...Question, pourcentage: e.target.value })
            
              if(prcgedit.length===0){
                setPrcgedit(questionsAuditStrategic.filter(questionAuditStrategic => questionAuditStrategic.objective ===Question.objective ))            
              }
             
              
            
          
      }
      const objhandel =(e)  => {
        setQuestion({ ...Question, objective: e.target.value });
        setPrcgedit([]);
      }


console.log(prcgedit)

console.log(Question)
console.log(questionsAuditStrategic.filter(questionAuditStrategic => questionAuditStrategic.objective ===Question.objective ))


  return (
            
                <>
      
      <div className='container-md'>
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
        <Typography variant="h6">{'Add Question'}</Typography>
        <div>
                   {
                  error!='' ?
                  <>
                  <div class="alert alert-danger" role="alert">
                    {error}
                  </div>
                  </>
                  
                : null
                }
                {
                  succes!=''?

                  <div class="alert alert-success" role="alert">
                    {succes}
                  </div>
                :null
                }
                </div>
            <TextField style={{width:'200%'}}
              name="question"
              label="Question"
              variant="outlined"
              value={Question.question}
              onChange={(e) => validQuestion(e)}
            />
            <div style={{width:"200%"}}>
              <TextField style={{width:'40%'}}
              name="pourcentage"
              label="Pourcentage"
              variant="outlined"
              value={Question.pourcentage}
              onChange={(e) => validPourcentage(e)}
            />
              <FormControl style={{width:'40%'}} sx={{ m: 1, minWidth: 200 }}>
                <InputLabel htmlFor="grouped-native-select">Objectives</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Objectives" onChange={(e) =>objhandel(e) } >
                   <option></option>
                   { 
                   objectivesStrategic != null && objectivesStrategic != undefined ?
                   objectivesStrategic.map((objective) => (
                   <><option value={objective.objective}>{objective.objective}</option>
                   </>
                   ))
                   : null
                      }
                  </Select>
              </FormControl>
            </div>
            

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
              name="score"
              label="Score"
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

      
        {

               
prcgedit.map((question) => (
    <>
    <div className='row text-center mt-2' style={{width:'200%'}}>
       <div className='col-sm-6'>
           <strong>{question.question}</strong>
       </div>
       <div className='col-sm-6'>
       <TextField
         name="pourcentage"
         label="Pourcentage"
         variant="outlined"
         onChange={(e) => setPrcgedit([{ ...prcgedit.find(q=> q._id===question._id), pourcentage: e.target.value }])}
       />
       </div> 
   </div>
    </>
 
     ))
     

       }
     { 
     
     <Button
          className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth
          onClick={handleSubmitPrcg}
        >Save</Button>
     
       
   }
   </form>
    </Paper>

      </div>
       
          </>
    
  );
};

export default Form;

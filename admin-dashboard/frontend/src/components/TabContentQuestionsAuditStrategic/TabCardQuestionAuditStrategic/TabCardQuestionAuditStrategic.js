import React, {useEffect,useState} from 'react';
import styles from './TabCardQuestionAuditStrategic.module.css';
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
import Collapse from "react-bootstrap/Collapse";


import { v4 as uuidv4 } from 'uuid';


import { makeStyles } from '@material-ui/core/styles';

import { deleteQuestionAuditStrategic} from '../../../actions/QuestionsAuditStrategic';
import { updateQuestionAuditStrategic} from '../../../actions/QuestionsAuditStrategic';


import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    button: {
      margin: theme.spacing(1),
    }
  }))

function TabCardQuestionAuditStrategic({id, question, responsesAndscore , objective,pourcentage,objectivesStrategic, questionsAuditStrategic}) {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const dispatch = useDispatch();
    const deleteE = () => {
        dispatch(deleteQuestionAuditStrategic(id))
    }
    

    const [error,setError] = useState('');
    const  [succes, setSucces ] =useState('') ;
    const  [counter, setCounter ] =useState(0) ;
    






    const [responses,setResponses ] = useState([
      { id: uuidv4(), response: '', score: '' },
    ]);
    const [UpdatedQuestion, setUpdatedQuestion] = useState(
      { id: id, question: question, pourcentage: pourcentage, objective:objective, responsesAndscore:responsesAndscore});
    const [prcgedit, setPrcgedit] = useState([]);
  
    const deleteRes = (response) => {
      responsesAndscore.splice(responsesAndscore.findIndex(res => res.response === response), 1);
      console.log(responsesAndscore)
      setUpdatedQuestion({ ...UpdatedQuestion, responsesAndscore: responsesAndscore });
      console.log(UpdatedQuestion);
      dispatch(updateQuestionAuditStrategic(id, UpdatedQuestion));
    }


    
  
    const handleChangeInput = (id, event) => {
      const newResponses = responses.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
      
      setResponses(newResponses );
      setUpdatedQuestion({ ...UpdatedQuestion, responsesAndscore: responsesAndscore.concat(responses) })

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
      if(!questionsAuditStrategic.find(questionAuditStrategic => questionAuditStrategic.question ===UpdatedQuestion.question && questionAuditStrategic.question!=question )){
          if(Number(UpdatedQuestion.pourcentage)<=100 && 0<=Number(UpdatedQuestion.pourcentage)<=100){
            
            dispatch(updateQuestionAuditStrategic(id,UpdatedQuestion));
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
          setUpdatedQuestion({ ...UpdatedQuestion, question: e.target.value })

      }
    
      const validPourcentage =(e)  => {
        
        
            setUpdatedQuestion({ ...UpdatedQuestion, pourcentage: e.target.value })
            if(UpdatedQuestion.pourcentage!=pourcentage){
              if(prcgedit.length===0){
                 
              setPrcgedit(questionsAuditStrategic.filter(questionAuditStrategic => questionAuditStrategic.objective ===UpdatedQuestion.objective && questionAuditStrategic._id != UpdatedQuestion.id ))            

              }
             
              
            }
          
      }

      const objhandel =(e)  => {
        setUpdatedQuestion({ ...UpdatedQuestion, objective: e.target.value });
        setPrcgedit([]);
      }





    




    return (
        <><div className={styles.TabCardExpert}>
            <div className='row text-center'>
                <div className='col-sm-4'>
                    <strong>{question}</strong>
                </div>
                <div className='col-sm-2'>
                    <pre>{pourcentage+'%'}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{objective}</pre>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={() => deleteE()} class="btn btn-danger btn-sm">Delete</button>
                    <button class="btn btn-success btn-sm" type="button" onClick={() => setOpen(!open)} aria-controls={"edit"+id} aria-expanded={open}>Edit</button>
                    
                </div>
                <div className='col-sm-2'>
                    <button class="btn btn-info btn-sm" type="button" onClick={() => setOpen2(!open2)} aria-controls={"details"+id} aria-expanded={open2}>Details</button>
                    
                </div>
            </div>

        </div >
        <Collapse in={open2}>
          <div id={"details"+id}>
          
            <div className='row text-center mt-2'>
                <div className='col-sm-4'>
                    <strong>Response</strong>
                </div>
                <div className='col-sm-4'>
                    <pre>Score</pre>
                </div>
                <div className='col-sm-4'>
                </div>
            </div>
            {
                    responsesAndscore.map( (res) => (
                        <>
                            <div className='row text-center'>
                              <div className='col-sm-4'>
                                  <strong>{res.response}</strong>
                              </div>
                              <div className='col-sm-4'>
                                  <pre>{res.score}</pre>
                              </div>
                              <div className='col-sm-4'>
                                <button onDoubleClick={() => deleteRes(res.response)} class="btn btn-danger btn-sm">Delete</button>
                              </div>
                          </div>
                            
                        </>
                    ) )
                } 
        
        </div>
        </Collapse>
        
        




        <Collapse in={open}>
        <div id={"edit"+id}>
                <div class="card card-body" >
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
               
                
                <Container>
      <form className={classes.root} >
            <TextField 
              style={{width:'200%'}}
              name="question"
              label="Question"
              variant="outlined"
              value={UpdatedQuestion.question}
              onChange={e => validQuestion(e)}
            />
            <div style={{width:'200%'}}>
              <TextField
              style={{width:'40%'}}
              name="pourcentage"
              label="Pourcentage"
              variant="outlined"
              value={UpdatedQuestion.pourcentage}
              onChange={(e) => validPourcentage(e) }
            />
              <FormControl sx={{ m: 1, minWidth: 200 }} style={{width:'40%'}}>
                <InputLabel htmlFor="grouped-native-select">Objectives</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Objectives" onChange={(e) => objhandel(e)}>
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
        
        </form>

        {

               
               prcgedit.map((question) => (
                   <>
                   <div className='row text-center mt-2' style={{width:'200%'}}>
                      <div className='col-sm-6' >
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
                    <>
                    <Button
                      fullWidth
                        className={classes.button}
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        onClick={handleSubmitPrcg}
                      >Save</Button>
                    </>
                      
                  }
                    
                   
    </Container>
                </div>
            </div>
            </Collapse>
          </>
        
    );
}


export default TabCardQuestionAuditStrategic;

import React, {useEffect,useState} from 'react';
import styles from './TabCardQuestionAuditCulture.module.css';
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

import { deleteQuestionAuditCulture} from '../../../actions/QuestionsAuditCulture';
import { updateQuestionAuditCulture} from '../../../actions/QuestionsAuditCulture';


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

function TabCardQuestionAuditCulture({id, question, responsesAndniveau , axe,axesCulture, questionsAuditCulture}) {
    const classes = useStyles()
  
    const dispatch = useDispatch();
    const deleteE = () => {
        dispatch(deleteQuestionAuditCulture(id))
    }

    const [error,setError] = useState('');
    const  [succes, setSucces ] =useState('') ;

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);





    const [responses,setResponses ] = useState([
      { id: uuidv4(), response: '', niveau: '' },
    ]);
    const [UpdatedQuestion, setUpdatedQuestion] = useState({ id: id, question: question, axe:axe, responsesAndniveau:responsesAndniveau });



    
  
    const handleChangeInput = (id, event) => {
      const newResponses = responses.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
      
      setResponses(newResponses );
      setUpdatedQuestion({ ...UpdatedQuestion, responsesAndniveau: responsesAndniveau.concat(responses) })

    }
  
    const handleAddFields = () => {
      setResponses([...responses, { id: uuidv4(),   response: '', niveau: '' }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...responses];
      values.splice(values.findIndex(value => value.id === id), 1);
      setResponses(values);
    }

    const Succes = text => {
      setSucces(text)
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      if(!questionsAuditCulture.find(questionAuditCulture => questionAuditCulture.question ===UpdatedQuestion.question && questionAuditCulture.question != question )){
        dispatch(updateQuestionAuditCulture(id,UpdatedQuestion));
        Succes( 'Question edited successfully');
      
      } else{
          setError('Question already exist') ;
        }
      

    };

    const validQuestion =(e)  => {
          setUpdatedQuestion({ ...UpdatedQuestion, question: e.target.value })
      }
      const deleteRes = (response) => {
        responsesAndniveau.splice(responsesAndniveau.findIndex(res => res.response === response), 1);
        setUpdatedQuestion({ ...UpdatedQuestion, responsesAndniveau: responsesAndniveau });
        dispatch(updateQuestionAuditCulture(id, UpdatedQuestion));
      }
    return (
        <><div className={styles.TabCardExpert}>
            <div className='row text-center'>
                <div className='col-sm-4'>
                    <strong>{question}</strong>
                </div>
                <div className='col-sm-3'>
                    <pre>{axe}</pre>
                </div>
                <div className='col-sm-3'>
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
                    <pre>Niveau</pre>
                </div>
                
            </div>
            {
                    responsesAndniveau.map( (res) => (
                        <>
                            <div className='row text-center'>
                              <div className='col-sm-4'>
                                  <strong>{res.response}</strong>
                              </div>
                              <div className='col-sm-4'>
                                  <pre>{res.niveau}</pre>
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
                  
              <Container>
              <form className={classes.root} onSubmit={handleSubmit}>
            <TextField 
              style={{width:'200%'}}
              name="question"
              label="Question"
              variant="outlined"
              value={UpdatedQuestion.question}
              onChange={e => validQuestion(e)}
            />
            <div style={{width:'200%'}}>
              <FormControl sx={{ m: 1, minWidth: 200 }} style={{width:'100%'}}>
                <InputLabel htmlFor="grouped-native-select">Axes</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Axes" onChange={(e) => setUpdatedQuestion({ ...UpdatedQuestion, axe: e.target.value })}>
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
                      style={{width:'200%'}}
                        className={classes.button}
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        onClick={handleSubmit}
                      >Save</Button>
        </form>         
              </Container>
            </div>
          </div>
        </Collapse>
        
          </>
        
    );
}


export default TabCardQuestionAuditCulture;

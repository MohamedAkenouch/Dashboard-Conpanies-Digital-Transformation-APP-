import React, {useEffect,useState} from 'react';
import styles from './TabCardInitiativeCulture.module.css';
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

import { deleteInitiativeCulture} from '../../../actions/InitiativesCulture';
import { updateInitiativeCulture} from '../../../actions/InitiativesCulture';


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

function TabCardInitiativeCulture({id, cultural_axe, degree ,axesCulture,initiatives}) {
    const classes = useStyles()
  
    const dispatch = useDispatch();
    const deleteE = () => {
        dispatch(deleteInitiativeCulture(id))
    }

    const [error,setError] = useState('');
    const  [succes, setSucces ] =useState('') ;

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);





    const [initiatives1,setInitiatives1 ] = useState([
      { id: uuidv4(), initiative: ''},
    ]);
    const [initiativess,setInitiativess ] = useState([
      {initiative: ''},
    ]);
    const [Updatedini, setUpdatedini] = useState({ id: id, cultural_axe: cultural_axe, initiatives:initiatives,degree:degree });



    
  
    const handleChangeInput = (id, event) => {
      const newInitiatives1= initiatives1.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
      
      setInitiatives1(newInitiatives1);
      setUpdatedini({ ...Updatedini, initiatives: initiatives.concat(initiatives1) })

    }
  
    const handleAddFields = () => {
      setInitiatives1([...initiatives1, { id: uuidv4(),   initiative: '' }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...initiatives1];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInitiatives1(values);
    }

    const Succes = text => {
      setSucces(text)
    }


    const handleSubmit = (e) => {
      e.preventDefault();

        dispatch(updateInitiativeCulture(id,Updatedini));
        Succes( 'Contenent edited successfully');
      

    };

      const validdegree =(e)  => {
          setUpdatedini({ ...Updatedini, degree: e.target.value })
      }
      const deleteRes = (ini) => {
        initiatives.splice(initiatives.findIndex(initia => initia.initiative === ini), 1);
        setUpdatedini({ ...Updatedini, initiatives: initiatives });
        dispatch(updateInitiativeCulture(id, Updatedini));
      }
    return (
        <><div className={styles.TabCardExpert}>
            <div className='row text-center'>
                <div className='col-sm-4'>
                    <strong>{cultural_axe}</strong>
                </div>
                <div className='col-sm-3'>
                    <pre>{degree}</pre>
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
                <div className='col-sm-8'>
                    <strong>Initiatives</strong>
                </div>

                
            </div>
            {
                    initiatives.map( (initia) => (
                        <>
                            <div className='row text-center'>
                              <div className='col-sm-8'>
                                  <pre>{initia.initiative}</pre>
                              </div>
                              <div className='col-sm-4'>
                                <button onDoubleClick={() => deleteRes(initia.initiative)} class="btn btn-danger btn-sm">Delete</button>
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
            
            <div style={{width:'200%'}}>
              <FormControl sx={{ m: 1, minWidth: 200 }} style={{width:'100%'}}>
                <InputLabel htmlFor="grouped-native-select">Axes</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Axes" onChange={(e) => setUpdatedini({ ...Updatedini, cultural_axe: e.target.value })}>
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
            <TextField 
              style={{width:'200%'}}
              name="degree"
              label="Niveau"
              type="number"
              variant="outlined"
              value={Updatedini.degree}
              onChange={e => validdegree(e)}
            />

        { initiatives1.map(initiative => (
          <div style={{width:'200%'}} key={initiative.id}>
            <TextField style={{width:'100%'}}
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


export default TabCardInitiativeCulture;

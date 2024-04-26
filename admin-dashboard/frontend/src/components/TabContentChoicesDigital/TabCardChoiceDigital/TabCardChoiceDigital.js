import React, {useEffect,useState} from 'react';
import styles from './TabCardChoiceDigital.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Collapse from "react-bootstrap/Collapse";

import { deleteChoiceDigital,updateChoiceDigital} from '../../../actions/ChoicesDigital';




function TabCardChoiceDigital({id, name,axe_id,level_id,axesDigital,levelsDigital}) {


    const [UpdatedChoice, setUpdatedChoice] = useState({ id: id, name: name, axe_id: axe_id, level_id:level_id});

    const dispatch = useDispatch();
    
    const deleteM = () => {
        dispatch(deleteChoiceDigital(id));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateChoiceDigital(id,UpdatedChoice))     
      };
    const [open, setOpen] = useState(false);

    const [axe, setAxe] = useState(axesDigital.find(axe => axe._id===axe_id));
    const [level, setLevel] = useState(levelsDigital.find(level => level._id===level_id));

    
    
    
    return (
        <div className={styles.TabCardModel}>
            <div className='row text-center'>
                <div className='col-sm-3'>
                    <pre>{name}</pre>
                </div>
                <div className='col-sm-3'>
                    <pre>{axe.name}</pre>
                </div>
                <div className='col-sm-3'>
                    <pre>{level.name}</pre>
                </div>
                <div className='col-sm-3'>
                    <button onDoubleClick={ () => deleteM() } class="btn btn-danger btn-sm">Delete</button>
                    <button class="btn btn-success btn-sm collapsed" type="button" onClick={() => setOpen(!open)} aria-controls={"edit"+id} aria-expanded={open}>Edit</button>
                </div>
            </div>
            <Collapse in={open}>
                <div  id={"edit"+id}  >
                <div class="card card-body" >
                
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel htmlFor="grouped-native-select">Axes</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Axes" onChange={(e) => setUpdatedChoice({ ...UpdatedChoice, axe_id: e.target.value })}>
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
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel htmlFor="grouped-native-select">Levels</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" label="Levels" onChange={(e) => setUpdatedChoice({ ...UpdatedChoice, level_id: e.target.value })}>
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
              <Button
                variant="contained" 
                color="primary" 
                type="submit" 

                onClick={handleSubmit}
                >Edit</Button>
                </div>
            </div>
            </Collapse>
            
        </div>
        
    );
}


export default TabCardChoiceDigital;

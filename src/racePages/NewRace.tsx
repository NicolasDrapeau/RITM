import {Button,  MenuItem, Select, TextField} from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useFormik } from 'formik';
import Textarea from '@mui/joy/Textarea';
import { Race, Distance } from '../models/race';
import { addRace } from '../repository/data';
// import { DistanceList } from '../distancePages/DistanceList';
import { NewDistance } from '../distancePages/NewDistance';
import { useState } from 'react';

export const NewRace = () => {
  const[distances, setDistances] = useState<Distance[]>([{distance:0}]);
  
  const initialValue:Race = {
      name:'',
      type:'select', 
      distances:[{
        distance:0
      }]}
    
    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: values => {
          addRace(values);
        },
      });
    
const addDistanceHandler = (newDistance:Distance) =>{
  setDistances(d => [...d,newDistance]);
}

    return (
    <div> 
        <h1>Nouvelle course</h1>
        <form onSubmit={formik.handleSubmit} >
            <TextField id="name" name="name" label="Nom de la course" variant="standard" type='text' value={formik.values.name} onChange={formik.handleChange} />
            <br />
            <TextField id="date" name="date" variant="standard" type='date' value={formik.values.date} onChange={formik.handleChange} />
            <br />
            {/* <DistanceList distances={distances}/>
            <NewDistance addDistanceHandler={addDistanceHandler}/> */}
            {/* <TextField id="distance" name="distance" label="distance" variant="standard" type='text' value={formik.values.distance} onChange={formik.handleChange} /> */}
            <br />
            <Select variant="standard" id="type" name="type" label="Type" defaultValue={'select'} value={formik.values.type} onChange={formik.handleChange} >
                    <MenuItem value={'select'}><em>Type de course</em></MenuItem>
                    <MenuItem value={'trail'}>Trail</MenuItem>
                    <MenuItem value={'route'}>Route</MenuItem>
                    <MenuItem value={'marche'}>Marche</MenuItem>
                    <MenuItem value={'cross'}>Cross</MenuItem>
            </Select>
            <br />
            <Textarea id="Comment" value={formik.values.comments} onChange={formik.handleChange}
              placeholder="Ajouter des infos supplémentaires à cette course tel que les liens vers le site de l'organisation et le formulaire d'inscription"  />
            <br />
            <Button variant="contained" type='submit' endIcon={<DirectionsRunIcon/>}>Ajouter</Button>
        </form>
    </div>);
}


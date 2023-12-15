import React, { useEffect, useState } from 'react';
import { Race } from '../models/race';
import { getAllRace } from '../repository/data';
import {Card,CardContent,Typography} from '@mui/material';

export const RaceDetail = () =>{
  const [races, setRaces] = useState<Race[]>();  
  useEffect(() => {
      getAllRace()
      .then((reponse) => {
        setRaces(reponse);  
      });
    },[])

    return (
      <>
        <h1>Liste des courses</h1>
        { (races === null || races === undefined) 
            ? <p>Aucune course enregistrée pour le moment!</p>
            : races.map((race, index) => (
              <>
                <Card>
                  <CardContent>
                    <Typography variant='h3'>
                    {race.name} ({race.type})
                    </Typography>
                    <Typography variant="h4" color="textSecondary" component="p">
                      toto
                      {/* {race.distances.map((d) =>
                      <p>d.distance</p>)} */}
                    </Typography>
                    <Typography color="textSecondary" component="p">
                      {race.comments}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            ))}
      </>);
}
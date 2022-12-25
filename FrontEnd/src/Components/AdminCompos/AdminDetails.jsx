import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//this component for Admin details

export default function AdminDetails() {
  return (
    <div className='box'>
      
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
       Admin 
        </Typography>
        <hr></hr>
        <Typography gutterBottom variant="h6" component="div">
        Admin Id: {localStorage.getItem('AId')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Username: {localStorage.getItem('AName')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Email: {localStorage.getItem('AEmail')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        PhoneNumber: {localStorage.getItem('APhone')}
        </Typography>
        
      </CardContent>
      
   

    </div>
    
  );
}

import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


//this component for user deatils
export default function UserDetails() {
  return (
  
    <div>
     
      
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        User Details
        </Typography>
        <hr></hr>
        <Typography gutterBottom variant="h6" component="div">
        User Id: {localStorage.getItem('UId')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Username: {localStorage.getItem('UName')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Email: {localStorage.getItem('UEmail')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        PhoneNumber: {localStorage.getItem('UPhone')}
        </Typography>
        
      </CardContent>
      
  

    </div>
    
  );
}

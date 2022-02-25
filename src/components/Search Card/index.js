import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Search for a CVE
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See All current CVEs</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
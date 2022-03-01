import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard(props) {

  // convert julian dates from props.modified
  const dateConverter = (props.modified * 1000)
  const d = new Date(dateConverter);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography variant="h5" component="div">
          {props.identifier}
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Id: {props.id}
        </Typography>

        <Typography sx={{ fontSize: 18 }} color="text.secondary">
          Risk: {props.risk}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Modified: {d.toDateString()}
        </Typography>

        <Typography variant="body2">
          Description: {props.description}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small" href={props.urls}>Learn More</Button>
      </CardActions>
    </Card>
  );
}


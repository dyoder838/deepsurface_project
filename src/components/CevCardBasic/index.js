import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard(props) {
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

// passing schema
{/* <CevCardBasic

id={props.db.id}
hosts={props.db.hosts}
patches={props.db.patches}
risk={props.db.risk}
identifier={props.db.identifier}
modified={props.db.modified}
description={props.db.description}
urls={props.db.urls} /> */}
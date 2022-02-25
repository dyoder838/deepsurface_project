import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Db from '../../vulnerability-data.json';

import CevCardBasic from '../../components/CevCardBasic'

export default function MainPage() {

    // create an API call with useEffect to collect and pass data 

    useEffect(() => {




    });

    return (
        <Grid container>

            <Grid item xs={12}>

                <Card sx={{ maxWidth: 345 }}>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Search for a CVE
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" href="/dashboard">See All current CVEs</Button>
                        <Button size="small">Advanced</Button>
                    </CardActions>

                </Card>

            </Grid>

        </Grid>

    );
};
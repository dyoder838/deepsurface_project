import React from 'react';
import Grid from '@mui/material/Grid';
import CevCardBasic from '../../components/CevCardBasic';

export default function DashBoard() {

    return(
       <Grid container>

            <Grid item xs={12}>
                <CevCardBasic />
            </Grid>

       </Grid>
    );

};
import React from 'react';

// components
import CevCardBasic from '../../components/CevCardBasic';

// MUI imports
import Grid from '@mui/material/Grid';

export default function DashBoard(props) {
    console.log("Analysis page props:",props.db)


    return (

        <Grid container>

                <Grid item xs={12} md={6} lg={6}>

                    <CevCardBasic

                        id={props.db.id}
                        hosts={props.db.hosts}
                        patches={props.db.patches}
                        risk={props.db.risk}
                        identifier={props.db.identifier}
                        modified={props.db.modified}
                        description={props.db.description}
                        urls={props.db.urls} />

                </Grid>

        </Grid>

    );

};
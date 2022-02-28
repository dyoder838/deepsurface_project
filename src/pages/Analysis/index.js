import React from 'react';
import Grid from '@mui/material/Grid';
import CevCardBasic from '../../components/CevCardBasic';

export default function DashBoard(props) {
 
    return (

        <Grid container>

            {Object.entries(props.db).map(([index, data]) =>

                <Grid key={index} item xs={12} md={6} lg={6}>

                    <CevCardBasic
                        key={index}
                        id={data.id}
                        hosts={data.hosts}
                        patches={data.patches}
                        risk={data.risk}
                        identifier={data.identifier}
                        modified={data.modified}
                        description={data.description}
                        urls={data.urls} />

                </Grid>

            )};

        </Grid>

    );

};
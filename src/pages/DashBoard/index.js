import React from 'react';
import Grid from '@mui/material/Grid';
import CevCardBasic from '../../components/CevCardBasic';
import CevDb from '../../vulnerability-data.json'

export default function DashBoard() {

    return (

        <Grid container>

            {Object.entries(CevDb).map(([index, data]) =>

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


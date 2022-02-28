import React from 'react';
import Grid from '@mui/material/Grid';
import CevCardBasic from '../../components/CevCardBasic';
import { searchCve } from '../../controllers/cveController';



export default function DashBoard(props) {

    searchCve(props, "id", "de41af0a-7ab4-4d73-9603-a336c76ff4ae")

    console.log("dashboard getCveId:", )

    return (

        <Grid container>

            {/* <Grid key={index} item xs={12} md={6} lg={6}>

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

            </Grid> */}




        </Grid>

    );

};


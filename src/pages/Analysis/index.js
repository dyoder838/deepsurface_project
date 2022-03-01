import {React, useState, setState} from 'react';

// components
import AnalysisBar from '../../components/AnalysisBar';
import Chart from '../../components/Chart'


// controller

// MUI imports
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function DashBoard(props) {
    
    // recieve data from children
    const [data, setData] = useState('');

    const analysisBarData = (analysisData) => {
        setData(analysisData);
       
    }
    // pass childToParent to the child childToParent={childToParent}
    console.log("child to parent data",data)


    return (

        <Grid container>

                <Grid item xs={12}>

                    <AnalysisBar analysisBarData={analysisBarData} db={props}/>

                </Grid>

                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                        >
                        <Chart chartData={data}/>
                        </Paper>
                    </Grid>

                </Grid>

        </Grid>

    );

};
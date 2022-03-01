import * as React  from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title';
import { InsertEmoticon } from '@mui/icons-material';




export default function Chart(props) {

    console.log("chart props:", (props.chartData))
    const theme = useTheme();
// add use effect to wait for the button push from component
// add useState to keep the page from err
    const bullShit = props.chartData
    const reformattedArray = bullShit.map(({ key, value}) => ({ [key]: value }));

        console.log(reformattedArray)
  return (
    <React.Fragment>
      <Title>Microsoft</Title>
      <ResponsiveContainer>
        <LineChart
          data={props.chartData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="modified"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Risk of OS Over Time
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="risk"
            stroke={theme.palette.primary.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
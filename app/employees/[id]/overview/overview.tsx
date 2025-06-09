'use client';

import * as React from 'react';
import Paper from "@mui/material/Paper";
import {Box, Stack, Typography} from '@mui/material';
import {LineChart} from "@mui/x-charts";
import {RadarChart} from "@mui/x-charts/RadarChart";

const data = [
    {month: 'Jan', hours: 40},
    {month: 'Feb', hours: 85},
    {month: 'Mar', hours: 130},
    {month: 'Apr', hours: 170},
    {month: 'May', hours: 215},
    {month: 'Jun', hours: 270},
    {month: 'Jul', hours: 400},
    {month: 'Aug', hours: 550},
    {month: 'Sep', hours: 710},
    {month: 'Oct', hours: 890},
    {month: 'Nov', hours: 1100},
    {month: 'Dec', hours: 1300},
];

export default function EmployeeOverview() {

    return (
        <>
            <Stack direction="row" spacing={2} width={'100%'} justifyContent={'space-between'}>
                <Box flex={3}>

                    <Paper elevation={3}>
                        <Box className="header" padding={1}>
                            <Typography variant="h6" gutterBottom component="div" fontWeight="bold">
                                Total Hours Worked
                            </Typography>
                        </Box>

                        <LineChart
                            height={300}
                            xAxis={[
                                {
                                    scaleType: 'point',
                                    data: data.map((entry) => entry.month),
                                },
                            ]}
                            series={[
                                {
                                    data: data.map((entry) => entry.hours),
                                    label: 'Cumulative Hours Worked',
                                    type: 'line'
                                },
                                {
                                    type: 'line',
                                    data: new Array(data.length).fill(1250),
                                    label: 'Hours Required for FMLA Eligibility',
                                    color: 'red',
                                    showMark: false,
                                    curve: 'linear',
                                }
                            ]}
                        />
                    </Paper>
                </Box>
                <Box flex={2}>

                    <Paper elevation={3}>
                        <Box className="header" padding={1}>
                            <Typography variant="h6" gutterBottom component="div" fontWeight="bold">
                                Performance
                            </Typography>
                        </Box>

                        <RadarChart
                            height={300}
                            series={[{data: [9, 8, 7, 5, 7, 10]}]}
                            radar={{
                                max: 10,
                                metrics: ['Quality of Work', 'Efficiency', 'Problem Solving', 'Collaboration', 'Reliability', 'Learning Ability'],
                            }}
                        />
                    </Paper>
                </Box>

            </Stack>

        </>
    );
}

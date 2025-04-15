'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Stack} from "@mui/material";
import {orange, green, deepOrange, lightGreen, lime, teal, cyan, amber, yellow, red} from '@mui/material/colors';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeOverviewInfoCard from "@/components/home-overview-info-card";
import {pieArcLabelClasses, PieChart} from '@mui/x-charts/PieChart';
import {BarChart, ChartsItemContentProps, ChartsTooltipSlots, PieSeriesType, PieValueType} from "@mui/x-charts";

const InfoCards = [
    {
        "id": 1,
        "title": "Attendance",
        "icon": <GroupsIcon/>,
        "delta": "+20",
        "compareTo": "yesterday",
        "showMaxValue": true,
        "currentValue": 6400,
        "maxValue": 10000,
    },{
        "id": 2,
        "title": "Income",
        "icon": <GroupsIcon/>,
        "delta": "+2561",
        "compareTo": "last month",
        "showMaxValue": false,
        "currentValue": 32400,
        "maxValue": 10000,
    },
]


export default function Home() {
    const data: PieValueType[] = [
        { id: 0, value: 10, label: 'Remote' },
        { id: 1, value: 15, label: 'Onsite' },
        { id: 2, value: 20, label: 'Hybrid' },
    ];

    const employmentTypeData: PieValueType[] = [
        { id: 0, value: 10, label: 'Full-time' },
        { id: 1, value: 15, label: 'Part-time' },
    ];
    const sourceOfKnowingData: PieValueType[] = [
        { id: 0, value: 10, label: 'Glassdoor' },
        { id: 1, value: 15, label: 'LinkedIn' },
        { id: 2, value: 20, label: 'Indeed' },
        { id: 3, value: 20, label: 'Job Fair' },
        { id: 4, value: 20, label: 'Friends' },
        { id: 5, value: 20, label: 'Google Search' },
        { id: 6, value: 20, label: 'Marmot HR' },
        { id: 7, value: 20, label: 'Other' },
    ];


    const total = data.reduce((acc, item) => acc + item.value, 0);
    return (
        <Grid container justifyContent="space-between"
              direction="column"
              height="100%"
              spacing={4}
              flexWrap={"wrap"}
            >
            <Grid size={12} flex={1}>
                <Stack direction="row" justifyContent="flex-start"
                spacing={4} flexWrap={"wrap"} useFlexGap height={"100%"} maxHeight={100}>

                    {InfoCards.map((info) => (
                        <HomeOverviewInfoCard
                            key={info.id}
                            title={info.title}
                            icon={info.icon}
                            delta={info.delta}
                            compareTo={info.compareTo}
                            currentValue={info.currentValue}
                            showMaxValue={info.showMaxValue}
                            maxValue={info.maxValue}
                        />
                    ))}

                </Stack>
            </Grid>

            <Stack flex={4} direction="row">
                <Grid size={8} spacing={4} flexWrap={"wrap"}>
                    <Grid size={12}>
                        <Stack direction="row" width={"100%"} textAlign="center"
                               spacing={2} justifyContent="space-around"
                               flexWrap={"wrap"} useFlexGap>
                            <Box flex={1}>
                                <Typography variant={"h5"}>Working Format</Typography>
                                <PieChart
                                    series={[
                                        {
                                            data,
                                            arcLabelMinAngle: 65,
                                            arcLabel: (item) => item.label ?? '',
                                            valueFormatter: (v, { dataIndex }) =>{
                                                return `${v.value} | ${((v.value / total) * 100).toFixed(2)}%`;
                                            },
                                            highlightScope: { fade: 'series', highlight: 'item' },
                                            faded: {},
                                            outerRadius: 80
                                        },
                                    ]}
                                    height={200}
                                    margin= {{right: 5}}
                                    slotProps={{
                                        legend: {
                                            hidden: true,
                                        }
                                    }}
                                    colors={[
                                        green[400], amber[400], lightGreen[400], lime[400], teal[400], cyan[400], orange[400], deepOrange[400], yellow[400], red[400]
                                    ]}

                                />
                            </Box>
                            <Box flex={1}>
                                <Typography variant={"h5"}>Source</Typography>
                                <PieChart
                                    series={[
                                        {
                                            data: sourceOfKnowingData,
                                            arcLabelMinAngle: 65,
                                            arcLabel: (item) => item.label ?? '',
                                            valueFormatter: (v, { dataIndex }) =>{
                                                return `${v.value} | ${((v.value / total) * 100).toFixed(2)}%`;
                                            },
                                            highlightScope: { fade: 'series', highlight: 'item' },
                                            faded: {},
                                            outerRadius: 80
                                        },
                                    ]}
                                    height={200}
                                    colors={[
                                        green[400], amber[400], lightGreen[400], lime[400], teal[400], cyan[400], orange[400], deepOrange[400], yellow[400], red[400]
                                    ]}
                                    slotProps={{
                                        legend: {
                                            itemMarkWidth: 18,
                                            itemMarkHeight: 6,
                                            markGap: 5,
                                            itemGap: 5,
                                        }
                                    }}

                                />
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid size={12}>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'] }]}
                            series={[{ data: [4, 3, 5,4, 3, 5,4, 3, 5,4, 3, 5] }]}
                            height={300}
                            barLabel="value"
                        />
                    </Grid>

                </Grid>
                <Grid size={4} >
                    <Stack direction="column" justifyContent="space-around"
                    height="100%" spacing={4}>
                        <Box flex={1} >
                            <Paper sx={{height:'90%'}}>away list</Paper>
                        </Box>
                        <Box flex={1}>
                            <Paper sx={{height:'90%'}}>birthday list</Paper>
                        </Box>
                    </Stack>
                </Grid>
            </Stack>
        </Grid>
    );
}
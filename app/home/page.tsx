'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Box, Stack} from "@mui/material";
import {amber, cyan, deepOrange, green, lightGreen, lime, orange, red, teal, yellow} from '@mui/material/colors';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeOverviewInfoCard from "@/components/home-overview-info-card";
import {PieChart} from '@mui/x-charts/PieChart';
import {BarChart, PieValueType} from "@mui/x-charts";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';

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
    }, {
        "id": 2,
        "title": "Income",
        "icon": <AttachMoneyIcon/>,
        "delta": "+2561",
        "compareTo": "last month",
        "showMaxValue": false,
        "currentValue": 32400,
        "maxValue": 10000,
    }, {
        "id": 3,
        "title": "Applications",
        "icon": <GroupAddIcon/>,
        "delta": "+25",
        "compareTo": "yesterday",
        "showMaxValue": false,
        "currentValue": 127,
    }, {
        "id": 4,
        "title": "Leave Requests",
        "icon": <EventIcon/>,
        "delta": "+2",
        "compareTo": "yesterday",
        "showMaxValue": false,
        "currentValue": 209,
    },
]


export default function Home() {
    const data: PieValueType[] = [
        {id: 0, value: 10, label: 'Remote'},
        {id: 1, value: 15, label: 'Onsite'},
        {id: 2, value: 20, label: 'Hybrid'},
    ];

    const employmentTypeData: PieValueType[] = [
        {id: 0, value: 10, label: 'Full-time'},
        {id: 1, value: 15, label: 'Part-time'},
    ];
    const sourceOfKnowingData: PieValueType[] = [
        {id: 0, value: 10, label: 'Glassdoor'},
        {id: 1, value: 15, label: 'LinkedIn'},
        {id: 2, value: 20, label: 'Indeed'},
        {id: 3, value: 20, label: 'Job Fair'},
        {id: 4, value: 20, label: 'Friends'},
        {id: 5, value: 20, label: 'Google Search'},
        {id: 6, value: 20, label: 'Marmot HR'},
        {id: 7, value: 20, label: 'Other'},
    ];


    const total = data.reduce((acc, item) => acc + item.value, 0);
    return (
        <Grid container justifyContent="space-between"
              direction="column"
              spacing={4}
              flexWrap={"wrap"}
        >
            <Grid size={12}>
                <Stack direction="row" justifyContent="space-between"
                       spacing={2} flexWrap={"wrap"} useFlexGap height={"100%"}>

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
            <Grid size={12}>
                <Stack direction="row"
                       spacing={3} justifyContent="space-between"
                       flexWrap={"wrap"} useFlexGap>
                    <Grid flexGrow={1} size={{xs: 12, md: 6}}>
                        <Paper>
                            <Stack direction="row" paddingLeft={1} paddingTop={1} columnGap={1}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    <WorkIcon/>
                                </Box>
                                <Typography variant={"h6"}>
                                    Working Format
                                </Typography>
                            </Stack>
                            <PieChart
                                series={[
                                    {
                                        data,
                                        // arcLabelMinAngle: 65,
                                        // arcLabel: (item) => item.label ?? '',
                                        valueFormatter: (v) => {
                                            return `${v.value} | ${((v.value / total) * 100).toFixed(2)}%`;
                                        },
                                        highlightScope: {fade: 'series', highlight: 'item'},
                                        faded: {},
                                        outerRadius: 80
                                    },
                                ]}
                                height={200}
                                // slotProps={{
                                //     legend: {
                                //         // hidden: true,
                                //         itemMarkWidth: 18,
                                //         itemMarkHeight: 6,
                                //         markGap: 5,
                                //         itemGap: 5,
                                //     }
                                // }}
                                colors={[
                                    green[400], amber[400], lightGreen[400], lime[400], teal[400], cyan[400], orange[400], deepOrange[400], yellow[400], red[400]
                                ]}

                            />
                        </Paper>

                    </Grid>
                    <Grid flexGrow={1} size={{xs: 12, md: 6}}>
                        <Paper>
                            <Typography variant={"h6"} paddingLeft={1} paddingTop={1}>Source</Typography>
                            <PieChart
                                series={[
                                    {
                                        data: sourceOfKnowingData,
                                        arcLabelMinAngle: 65,
                                        arcLabel: (item) => item.label ?? '',
                                        valueFormatter: (v, {dataIndex}) => {
                                            return `${v.value} | ${((v.value / total) * 100).toFixed(2)}%`;
                                        },
                                        highlightScope: {fade: 'series', highlight: 'item'},
                                        faded: {},
                                        outerRadius: 80
                                    },
                                ]}
                                height={200}
                                colors={[
                                    green[400], amber[400], lightGreen[400], lime[400], teal[400], cyan[400], orange[400], deepOrange[400], yellow[400], red[400]
                                ]}
                                // slotProps={{
                                //     legend: {
                                //         itemMarkWidth: 18,
                                //         itemMarkHeight: 6,
                                //         markGap: 5,
                                //         itemGap: 5,
                                //     }
                                // }}
                            />
                        </Paper>
                    </Grid>
                </Stack>
            </Grid>
            <Grid size={12}>
                <Paper>
                    <Typography variant={"h6"} paddingLeft={1} paddingTop={1}>Attendance</Typography>
                    <BarChart
                        title='Attendence'
                        borderRadius={5}
                        xAxis={[{
                            scaleType: 'band',
                            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
                        }]}
                        series={[{data: [4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5]}]}
                        height={300}
                        barLabel="value"
                        colors={[orange[500]]}
                    />
                </Paper>

            </Grid>


        </Grid>
    );
}
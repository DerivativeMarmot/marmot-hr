'use client';

import {Box, Divider, Stack, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {BarChart, PieChart} from "@mui/x-charts";
import * as React from "react";
import {green, orange, red, yellow} from "@mui/material/colors";

function addLabels<T extends { dataKey: string }>(series: T[]) {
    return series.map((item) => ({
        ...item,
        label: item.dataKey,
        valueFormatter: (v: number | null) => (v ? `$ ${v.toLocaleString()}k` : '-'),
    }));
}

export default function EmployeeLeaveOfAbsence() {
    return (
        <Paper elevation={3}>
            <Box className="header" padding={1}>
                <Typography variant="h6" gutterBottom component="div" fontWeight="bold">
                    Leave Bank
                </Typography>
            </Box>


            <Stack direction={"column"} spacing={2} padding={1}>
                <Box>
                    <Stack direction="row" spacing={2}>
                        <Box>
                            <Typography fontSize={"medium"} gutterBottom component="div" color={"primary"} fontWeight="bold">
                                FMLA
                            </Typography>
                        </Box>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Available', color: green[500] },
                                        { id: 1, value: 15, label: 'Pending',color: yellow[700] },
                                        { id: 2, value: 20, label: 'Used', color: red[500] },
                                    ],
                                },
                            ]}
                            width={200}
                            height={200}
                        />
                    </Stack>
                    <Divider />
                </Box>
                <Box>
                    <Stack direction="row" spacing={2}>
                        <Box>
                            <Typography fontSize={"medium"} gutterBottom component="div" color={"primary"} fontWeight="bold">
                                CFRA
                            </Typography>
                        </Box>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 1, label: 'Available', color: green[500] },
                                        { id: 1, value: 3, label: 'Pending',color: yellow[700] },
                                        { id: 2, value: 20, label: 'Used', color: red[500] },
                                    ],
                                },
                            ]}
                            width={200}
                            height={200}
                        />
                    </Stack>
                    <Divider />
                </Box>

            </Stack>


        </Paper>
    )
}
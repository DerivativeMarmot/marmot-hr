'use client';

import * as React from 'react';
import {lazy, Suspense, useState} from 'react';
// import EmployeeOverview from './overview/page';
// import EmployeeProfile from './profile/page';
import {Fade, Tab, Tabs} from "@mui/material";
import {Box} from "@mui/system";
import employeeData from '@/data/employees.json';
import Typography from "@mui/material/Typography";

const EmployeeOverview =
    lazy(() => import('./overview/page'));
const EmployeeProfile =
    lazy(() => import('./profile/page'));

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <Fade in={true} timeout={300}>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{p: 3}}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </Box>}
            </div>
        </Fade>

    );
}

function getEmployee(id: string) {
    const ee = employeeData.find((employee) => employee.id === id)
    if (ee) return ee
    else return {'name': ''}

}

export default function Employee({
                                     params,
                                 }: {
    params: Promise<{ id: string }>
}) {
    const {id} = React.use(params);

    const [value, setValue] = React.useState(0);
    const [visitedTabs, setVisitedTabs] = useState([0]);

    const handleChange =
        (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
            if (!visitedTabs.includes(newValue)) {
                setVisitedTabs((prev) => [...prev, newValue]);
            }
        };

    return (
        <div>
            <div>
                <Typography variant="h4" color="textSecondary" marginBottom={"20px"}>
                    {getEmployee(id).name}
                </Typography>
            </div>

            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Overview" value={0}/>
                <Tab label="Profile" value={1}/>
                <Tab label="Leave of Absence" value={2}/>
            </Tabs>

            {visitedTabs.includes(0) && (
                <CustomTabPanel value={value} index={0}>
                    <EmployeeOverview/>
                </CustomTabPanel>

            )}
            {visitedTabs.includes(1) && (
                <CustomTabPanel value={value} index={1}>
                    <EmployeeProfile/>
                </CustomTabPanel>

            )}

            {/*<CustomTabPanel value={value} index={0}>*/}
            {/*    <EmployeeOverview/>*/}
            {/*</CustomTabPanel>*/}
            {/*<CustomTabPanel value={value} index={1}>*/}
            {/*    <EmployeeProfile/>*/}
            {/*</CustomTabPanel>*/}
            {/*<CustomTabPanel value={value} index={2}>*/}
            {/*    Item Three*/}
            {/*</CustomTabPanel>*/}
        </div>
    );
}
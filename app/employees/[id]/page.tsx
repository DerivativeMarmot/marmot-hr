'use client';

import * as React from 'react';
import { useState, Suspense, lazy } from 'react';
import { useParams } from 'next/navigation';
// import EmployeeOverview from './overview/page';
// import EmployeeProfile from './profile/page';
import {Fade, Tab, Tabs} from "@mui/material";
import {Box} from "@mui/system";

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
    const { children, value, index, ...other } = props;

    return (
        <Fade in={true} timeout={300}>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </Box>}
            </div>
        </Fade>

    );
}

export default function Employee(){
    const { id } = useParams();

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
                employee {id}
            </div>

            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Item 1" value={0}/>
                <Tab label="Item 2" value={1}/>
                <Tab label="Item 3" value={2}/>
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
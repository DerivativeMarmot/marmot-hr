'use client';

import employeeData from "@/data/employees.json";
import * as React from "react";
import {useMemo} from "react";
import {usePathname, useRouter} from "next/navigation";
import Typography from "@mui/material/Typography";
import {Box, Chip, Stack, Tab, Tabs} from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import {CssVarsProvider} from '@mui/joy/styles';
import Image from "next/image";


function getEmployee(id: string) {
    const ee = employeeData.find((employee) => employee.id === id)
    if (ee) return ee
    else return {'name': ''}

}

const tabConfig = [
    {label: 'Overview', path: 'overview'},
    {label: 'Profile', path: 'profile'},
    {label: 'Leave Of Absence', path: 'leave-of-absence'},
];

const sectionToTabValue = {
    'overview': 0,
    'profile': 1,
    'leave-of-absence': 2,
};

const tabValueToSection = {
    0: 'overview',
    1: 'profile',
    2: 'leave-of-absence',
};

export default function EmployeeDashboardLayout({
    id,
    children,
                                                }:{
    id: string;
    children: React.ReactNode
}) {

    const pathname = usePathname();
    const router = useRouter();

    const currentSection = pathname.split('/').pop();
    const currentTab = useMemo(() => {
        return sectionToTabValue[currentSection as keyof typeof sectionToTabValue] ?? 0;
    }, [currentSection]);

    const handleChange =
        (event: React.SyntheticEvent, newValue: number) => {
            const section = tabValueToSection[newValue as keyof typeof tabValueToSection] ?? 'overview';
            router.push(`/employees/${id}/${section}`);
        };

    return (
        <Box>
            <Box className="employee-dashboard-header" mb={2}>

                <Stack direction="column" rowGap={0}>
                    <Box className={'banner'}>
                        <CssVarsProvider>
                            <AspectRatio sx={{width: '100%'}} ratio={'5/1'}>
                                <Typography component="div">
                                    Add Cover
                                </Typography>
                            </AspectRatio>
                        </CssVarsProvider>
                    </Box>

                    <Box className={'info'} pl={{lg: 6, xs: 3}} position={'relative'}>
                        <Stack direction="row" flexWrap={"wrap"} columnGap={1}>
                            <Image
                                src="https://avatars.githubusercontent.com/u/78244769?s=400&u=1eafd3732738b93e6c9a41acfd77c3f51e8398a6&v=4"
                                alt="avatar"
                                width={150}
                                height={150}
                                style={{ borderRadius: '50%',position: 'absolute', transform: 'translateY(-50%)',}}
                            />

                            <Box minWidth={150} minHeight={75}></Box>

                            <Box display="flex" alignItems="start" >
                                <Stack display="flex">
                                    <Stack direction="row" spacing={1} mt={1}>
                                        <Typography fontSize={'x-large'}>{getEmployee(id).name}</Typography>
                                        <Box display={'flex'} alignItems={'center'} flex={{sm: 0}}>
                                            <Chip label={'Active'} color="success" variant="outlined" />
                                        </Box>
                                        <Box display={'flex'} alignItems={'center'}>
                                            <Chip label={'At Work'} color="primary" variant="outlined" />
                                        </Box>
                                    </Stack>
                                    <Typography fontSize={'medium'} color={"textSecondary"}>{getEmployee(id).jobTitle}</Typography>
                                </Stack>
                            </Box>

                        </Stack>
                    </Box>
                </Stack>

            </Box>

            <Tabs value={currentTab} onChange={handleChange} sx={{paddingBottom: '2pc'}}>
                {tabConfig.map((tab, index) => (
                    <Tab key={index} label={tab.label} value={index}
                         sx={{fontWeight: 'bold', textTransform: 'none', fontSize: 'medium'}} />
                ))}
            </Tabs>

            <Box>
                {children}
            </Box>

        </Box>

    )
}
'use client';

import * as React from "react";
import {useMemo} from "react";
import Typography from "@mui/material/Typography";
import {Tab, Tabs} from "@mui/material";
import employeeData from "@/data/employees.json";
import {usePathname, useRouter} from "next/navigation";


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

export default function EmployeeSectionLayout({
                                                  children,
                                                  params
                                              }: {
    children: React.ReactNode;
    params: Promise<{ id: string }>
}) {

    const {id} = React.use(params);
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
        <div>
            <div>
                <Typography variant="h4" color="textSecondary" marginBottom={"20px"}>
                    {getEmployee(id).name}
                </Typography>
            </div>

            <Tabs value={currentTab} onChange={handleChange} sx={{paddingBottom: '2pc'}}>
                {tabConfig.map((tab, index) => (
                    <Tab key={index} label={tab.label} value={index}/>
                ))}
            </Tabs>

            <div>
                {children}
            </div>

        </div>

    )

}
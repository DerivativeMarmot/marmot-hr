'use client'
import * as React from 'react';
import {NextAppProvider} from '@toolpad/core/nextjs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type {Navigation} from '@toolpad/core/AppProvider';

import HomeIcon from '@mui/icons-material/Home';
import {PageContainer} from "@toolpad/core/PageContainer";
import {DashboardLayout} from "@toolpad/core/DashboardLayout";
import {Fade} from "@mui/material";
// import { CssBaseline  } from '@mui/material';
import theme from '../theme';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupsIcon from '@mui/icons-material/Groups';


const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'home',
        title: 'Home',
        icon: <HomeIcon/>,
    },
    {segment: 'recruitment', title: 'Recruitment', icon: <GroupAddIcon/>},
    {
        segment: 'employees',
        title: 'Employees',
        icon: <GroupsIcon/>
    },
    {segment: 'leave-of-absence', title: 'Leave of Absence', icon: <ShoppingCartIcon/>},
    {
        segment: 'reports',
        title: 'Reports',
        children: [
            {
                segment: 'sales',
                title: 'Sales',
            },
            {
                segment: 'traffic',
                title: 'Traffic',
            },
        ],
    },
];

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en"
              data-toolpad-color-scheme="light">
        <body>
        <NextAppProvider navigation={NAVIGATION} theme={theme}>
            <DashboardLayout>
                <Fade in={true}>
                    <PageContainer breadcrumbs={[]} sx={{marginLeft: "auto", marginRight: "auto"}}>
                        {children}
                    </PageContainer>
                </Fade>
            </DashboardLayout>
        </NextAppProvider>

        </body>
        </html>
    );
}
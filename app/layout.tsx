import * as React from 'react';
import {Suspense} from 'react';
import {NextAppProvider} from '@toolpad/core/nextjs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type {Navigation} from '@toolpad/core/AppProvider';

import HomeIcon from '@mui/icons-material/Home';
import {PageContainer} from "@toolpad/core/PageContainer";
import {DashboardLayout} from "@toolpad/core/DashboardLayout";
import {Box, Fade} from "@mui/material";
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
        icon: <GroupsIcon/>,
        pattern: 'employees{/:id}*'
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
        <Suspense>
            <NextAppProvider navigation={NAVIGATION} theme={theme}>
                <DashboardLayout sx={{marginLeft: 0, marginRight: 0}}>
                    <Fade in={true}>
                        <Box id={'rootPageContainer'}
                             sx={{
                                 marginLeft: 'auto', marginRight: 'auto', overflow: 'auto',
                                 width: '100%', position: 'relative'
                             }}>
                            <PageContainer
                                title={''} breadcrumbs={[]}
                            >
                                {children}
                            </PageContainer>
                        </Box>

                    </Fade>

                </DashboardLayout>
            </NextAppProvider>
        </Suspense>


        </body>
        </html>

    );
}
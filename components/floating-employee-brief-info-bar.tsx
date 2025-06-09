'use client';

import {Box, Fade, Paper, Stack, Typography} from '@mui/material';
import * as React from "react";
import Image from "next/image";

export default function FloatingEmployeeInfo({name, title, showFloating}: {
    name: string,
    title: string,
    showFloating: boolean
}) {
    return (
        <>
            <Fade in={showFloating} id={'floatingEmployeeInfoBar'}>
                <Box position="fixed" zIndex={999}
                     top={{sm: 64, xs: 56}} right={20}
                >
                    <Paper elevation={3} sx={{padding: 1}}>
                        <Stack direction="row" columnGap={2}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Image
                                    src="https://avatars.githubusercontent.com/u/78244769?s=400&u=1eafd3732738b93e6c9a41acfd77c3f51e8398a6&v=4"
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    style={{borderRadius: '50%'}}
                                />
                            </Box>
                            <Box>
                                <Typography fontSize={"large"}>{name}</Typography>
                                <Typography fontSize={"medium"} color="text.secondary">{title}</Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Box>
            </Fade>
        </>
    );
}

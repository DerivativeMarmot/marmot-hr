import React from 'react';
import {Box, Typography} from '@mui/material';
import Paper from "@mui/material/Paper";

interface ProfileInfoPaper {
    title: string;
    children: React.ReactNode;// default to true
}

export default function ProfileInfoPaper({title, children}: ProfileInfoPaper) {
    return (
        <>
            <Paper sx={{padding: "10px"}} aria-label={"container"}>
                <Box aria-label={"header"}>
                    <Typography variant="h5" marginBottom={"20px"}>
                        {title}
                    </Typography>
                </Box>
                <Box aria-label={"body"}>
                    {children}
                </Box>
            </Paper>
        </>
    )
}

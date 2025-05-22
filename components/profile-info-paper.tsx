import React from 'react';
import {Box, Typography} from '@mui/material';
import Paper from "@mui/material/Paper";
import ProfileInfoRowProps from "@/components/profile-info-row";

interface ProfileInfoPaperProps {
    title: string;
    children: React.ReactNode;
}

export default function ProfileInfoPaper({title, children}: ProfileInfoPaperProps) {
    const childArray = React.Children.toArray(children) as React.ReactElement<typeof ProfileInfoRowProps>[];
    return (
        <>
            <Paper sx={{padding: "10px"}} aria-label={"container"}>
                <Box aria-label={"header"}>
                    <Typography variant="h5" marginBottom={"20px"}>
                        {title}
                    </Typography>
                </Box>
                <Box aria-label={"body"}>
                    {childArray.map((child, index) => (
                        React.cloneElement(child, {
                            isDividerEnabled: index !== childArray.length - 1
                        })
                    ))}
                </Box>
            </Paper>
        </>
    )
}

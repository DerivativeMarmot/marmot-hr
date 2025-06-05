import React from 'react';
import {Box, ListItemButton, Stack, Typography} from '@mui/material';
import {Divider} from "@mui/joy";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ProfileInfoRowProps {
    label: string;
    children: React.ReactNode;
    onEdit?: () => void;
    isDividerEnabled?: boolean; // default to true
}

export default function ProfileInfoRow({label, children, onEdit, isDividerEnabled = true}: ProfileInfoRowProps) {
    return (
        <>
            <ListItemButton sx={{padding: 0}}>
                <Stack direction="row" justifyContent="space-between" padding={2} width={"100%"}>
                    <Box flex={2} display="flex" alignItems="center">
                        <Typography color="textSecondary" fontSize={14}>
                            {label}
                        </Typography>
                    </Box>

                    <Box flex={4} display="flex" alignItems="center">
                        {typeof children === 'string' ? (
                            <Typography color="textSecondary" component={"div"}>{children}</Typography>
                        ) : (
                            children
                        )}
                    </Box>

                    <Box flex={1} display="flex" justifyContent="flex-end" alignItems="center">
                        <ArrowForwardIosIcon color={"primary"}
                        onClick={onEdit}/>
                    </Box>
                </Stack>
            </ListItemButton>

            {isDividerEnabled && <Divider/>}
        </>
    );
}

'use client';

import React from 'react';
import {Box, IconButton, Stack, Typography} from '@mui/material';
import {Divider} from "@mui/joy";
import BorderColorIcon from "@mui/icons-material/BorderColor";

interface ProfileInfoRow {
    label: string;
    children: React.ReactNode;
    onEdit?: () => void;
    isDividerEnabled?: boolean; // default to true
}

export default function ProfileInfoRow({label, children, onEdit, isDividerEnabled = true}: ProfileInfoRow) {
    return (
        <>
            <Stack direction="row" justifyContent="space-between" margin={1}>
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

                <Box flex={1} display="flex" justifyContent="flex-end">
                    {onEdit && (
                        <IconButton onClick={onEdit} color="primary">
                            <BorderColorIcon/>
                        </IconButton>
                    )}
                </Box>
            </Stack>
            {isDividerEnabled && <Divider/>}
        </>
    );
}

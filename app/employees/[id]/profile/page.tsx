import * as React from 'react';
import Paper from "@mui/material/Paper";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {IconButton, Stack} from '@mui/material';
import Typography from "@mui/material/Typography";

export default function EmployeeProfile() {
    return (
        <>
            <Paper>
                <Stack direction="row" spacing={1}
                justifyContent="space-between">
                    <Typography variant="h5" style={{padding: '8px'}}>
                        Profile picture
                    </Typography>
                    <IconButton color="primary">
                        <BorderColorIcon />
                    </IconButton>
                </Stack>
                <div style={{ textAlign: "center" }}>
                    <img style={{borderRadius: '200px', width: '200px', height: '200px'}}
                         src={"https://avatars.githubusercontent.com/u/78244769?s=400&u=1eafd3732738b93e6c9a41acfd77c3f51e8398a6&v=4"}
                         alt={"123"}/>
                </div>
                </Paper>
            <Paper></Paper>
        </>
    );
}
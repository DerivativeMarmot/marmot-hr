import * as React from 'react';
import Paper from "@mui/material/Paper";
import {Stack} from '@mui/material';
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
import {Container, Divider} from "@mui/joy";
import ProfileInfoRow from "@/components/profile-info-row";
import ProfileInfoPaper from "@/components/profile-info-paper";

export default function EmployeeProfile() {
    return (
        <Container>
            <Stack direction="column" spacing={4}>
                <Paper sx={{padding: "10px"}} aria-label={"container"}>
                    <Box aria-label={"header"}>
                        <Typography variant="h5" marginBottom={"20px"}>
                            Basic info
                        </Typography>
                    </Box>
                    <Box aria-label={"body"}>
                        <Stack direction="row" justifyContent="space-between">
                            <Box flex={2} display="flex" alignItems="center">
                                <Typography color="textSecondary" component={"div"} fontSize={14}>
                                    Profile picture
                                </Typography>
                            </Box>
                            <Box flex={4} color="textSecondary" display="flex" alignItems="center">
                                <Typography color="textSecondary" component={"div"}>
                                    A picture helps people recognize you.
                                </Typography>
                            </Box>
                            <Box flex={1} textAlign={"end"}>
                                <img style={{borderRadius: '200px', width: '42px', height: '42px'}}
                                     src={"https://avatars.githubusercontent.com/u/78244769?s=400&u=1eafd3732738b93e6c9a41acfd77c3f51e8398a6&v=4"}
                                     alt={"123"}/>
                            </Box>
                        </Stack>
                        <Divider/>

                        <ProfileInfoRow label={"Name"} onEdit={() => console.log('Edit birthday.')}>
                            Derivative Marmot
                        </ProfileInfoRow>

                        <ProfileInfoRow label={"Birthday"}
                                        onEdit={() => console.log('Edit birthday.')}>
                            October 10, 1980
                        </ProfileInfoRow>

                        <ProfileInfoRow label={"Gender"} onEdit={() => console.log('Edit birthday.')}
                                        isDividerEnabled={false}>
                            Male
                        </ProfileInfoRow>
                    </Box>

                </Paper>


                <ProfileInfoPaper title={"Contact info"}>
                    <ProfileInfoRow label={"Phone"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        (433) 234-9999
                    </ProfileInfoRow>
                    <ProfileInfoRow label={"Email"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        <Stack direction="column" justifyContent="space-between">
                            <Typography color="textSecondary" component={"div"}>123@gmail.com</Typography>
                            <Typography color="textSecondary" component={"div"}>ee444@gmail.com</Typography>
                        </Stack>
                    </ProfileInfoRow>
                </ProfileInfoPaper>
            </Stack>

        </Container>
    );
}
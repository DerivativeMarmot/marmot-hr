import * as React from 'react';
import {Stack} from '@mui/material';
import {Container} from "@mui/joy";
import ProfileInfoRow from "@/components/profile-info-row";
import ProfileInfoPaper from "@/components/profile-info-paper";
import Image from 'next/image';

export default function EmployeeProfile() {
    return (
        <Container>
            <Stack direction="column" spacing={4}>
                <ProfileInfoPaper title={"Basic info"}>
                    <ProfileInfoRow label={"Profile picture"}
                                    onEdit={() => console.log('Edit picture.')}>
                        <Image
                            src="https://avatars.githubusercontent.com/u/78244769?s=400&u=1eafd3732738b93e6c9a41acfd77c3f51e8398a6&v=4"
                            alt="123"
                            width={42}
                            height={42}
                            style={{ borderRadius: '200px', objectFit: 'cover' }}
                        />
                    </ProfileInfoRow>

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
                </ProfileInfoPaper>

                <ProfileInfoPaper title={"Contact info"}>
                    <ProfileInfoRow label={"Phone"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        (433) 234-9999
                    </ProfileInfoRow>
                    <ProfileInfoRow label={"Work Email"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        work@marmothr.com
                    </ProfileInfoRow>
                    <ProfileInfoRow label={"Personal Email"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        personal@gmail.com
                    </ProfileInfoRow>
                </ProfileInfoPaper>

                <ProfileInfoPaper title={"Address"}>
                    <ProfileInfoRow label={"Home"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        4321 Sunset Ave, Los Angeles, CA
                    </ProfileInfoRow>
                    <ProfileInfoRow label={"Work"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        11111 Ohio Ave, Los Angeles, CA
                    </ProfileInfoRow>
                </ProfileInfoPaper>

                <ProfileInfoPaper title={"Employment info"}>
                    <ProfileInfoRow label={"Hire Date"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        May 21, 2025
                    </ProfileInfoRow>
                    <ProfileInfoRow label={"Job Title"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        Software Engineer
                    </ProfileInfoRow>
                    <ProfileInfoRow label={"Department"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        ...
                    </ProfileInfoRow>
                    <ProfileInfoRow label={"Work Schedule"}
                                    onEdit={() => console.log('Edit birthday.')}>
                        TODO
                    </ProfileInfoRow>
                </ProfileInfoPaper>
            </Stack>

        </Container>
    );
}
import * as React from "react";
import {Box, Fade} from "@mui/material";
import {Suspense} from "react";

export default function Layout({
                                   children
                               }: {
    children: React.ReactNode
}) {
    return (
        <Suspense >
            <Fade in={true}>
                <Box>
                    {children}
                </Box>
            </Fade>
        </Suspense>

    )
}
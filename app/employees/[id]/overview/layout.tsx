import * as React from "react";
import {Suspense} from "react";
import {Box, Fade} from "@mui/material";

export default function Layout({
                                   children
                               }: {
    children: React.ReactNode
}) {
    return (
        <Suspense>
            <Fade in={true}>
                <Box>
                    {children}
                </Box>
            </Fade>
        </Suspense>

    )
}
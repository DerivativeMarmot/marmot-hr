import * as React from "react";
import {Fade} from "@mui/material";
import {Suspense} from "react";

export default function Layout({
                                   children
                               }: {
    children: React.ReactNode
}) {
    return (
        <Suspense >
            <Fade in={true} timeout={500}>
                <div>
                    {children}
                </div>
            </Fade>
        </Suspense>

    )
}
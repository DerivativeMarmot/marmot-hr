import * as React from "react";
import {Fade} from "@mui/material";

export default function Layout({
                                                  children,
                                                  params
                                              }: {
    children: React.ReactNode;
    params: Promise<{ id: string }>
}){
    return (
        <Fade in={true} timeout={500}>
            <div>
                {children}
            </div>
        </Fade>
    )
}
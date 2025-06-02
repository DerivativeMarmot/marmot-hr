'use client';

import * as React from 'react';
import {redirect} from "next/navigation";

export default function Employee({
                                     params,
                                 }: {
    params: Promise<{ id: string }>
}) {
    const {id} = React.use(params);

    redirect(`/employees/${id}/overview`);
}
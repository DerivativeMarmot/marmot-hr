import * as React from "react";
import {Suspense} from "react";
import EmployeeDashboardLayout from "@/app/employees/[id]/employee-dashboard-layout";

export default function Layout({
                                                  children,
                                                  params
                                              }: {
    children: React.ReactNode;
    params: Promise<{ id: string }>
}) {
    const {id} = React.use(params);

    return (
        <Suspense>
            <EmployeeDashboardLayout id={id}>
                {children}
            </EmployeeDashboardLayout>
        </Suspense>

    )
}
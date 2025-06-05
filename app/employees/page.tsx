import * as React from 'react';
import {Suspense} from 'react';
import EmployeeTable from "@/app/employees/employee-table";

export default function EmployeeOverview() {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <EmployeeTable/>
        </Suspense>
    )
}
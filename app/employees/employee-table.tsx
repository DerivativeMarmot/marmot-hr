'use client';
import {useRouter} from "next/navigation";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as React from "react";
import employeeData from "@/data/employees.json";
import {Chip} from "@mui/material";
import {purple} from "@mui/material/colors";


const rows = employeeData;

function getRenderedStatus(status: string) {
    if (status == "Attendance") {
        return (
            <Chip label="Attendance" color="success"/>
        )
    } else if (status == "Absence") {
        return (
            <Chip label="Absence" color="error"/>
        )
    } else if (status == "On Leave") {
        return (
            <Chip label="On Leave" sx={{backgroundColor:purple[500], color:'white'}}/>
        )
    }
}

export default function EmployeeTable(){
    const router = useRouter();
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}
                                  sx={{cursor: 'pointer'}}
                                  hover
                                  role={"checkbox"}
                                  onClick={() => {
                                      router.push(`/employees/${row.id}`);
                                  }}>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.jobTitle}</TableCell>
                            <TableCell align="left">
                                {getRenderedStatus(row.status)}
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
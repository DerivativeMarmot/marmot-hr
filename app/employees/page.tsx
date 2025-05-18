'use client';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useRouter} from "next/navigation";
import {Chip} from "@mui/material";
import {
    purple
} from '@mui/material/colors';
import employeeData from '@/data/employees.json';


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return {name, calories, fat, carbs, protein};
}

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

export default function EmployeeOverview() {

    const router = useRouter();
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="left">Title</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.id}
                                        onClick={() => {
                                            router.push(`/employees/${row.id}`);
                                        }}
                        sx={{cursor: 'pointer'}}
                        hover role={"checkbox"}>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.jobTitle}</StyledTableCell>
                            <StyledTableCell align="left">
                                {getRenderedStatus(row.status)}
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
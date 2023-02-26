import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";

import React from "react";
import { tableData } from "../../CreatedData";
// import { tableData } from "../CreatedData";

const Membertable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead sx={{ bgcolor: "#060047" }}>
            <TableRow>
              <TableCell
                align="center"
                sx={{ borderRight: 1, borderColor: "white.main" }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: 1,
                  borderColor: "white.main",
                  color: "white.main",
                  fontSize: 25,
                }}
              >
                SILVER <br />
                Membership
              </TableCell>
              <TableCell align="center" sx={{ color: "#FFDA77", fontSize: 25 }}>
                GOLD
                <br />
                Membership
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.key}>
                <TableCell>{row.text1}</TableCell>
                <TableCell sx={{ bgcolor: "#EEEEEE" }}>{row.text2}</TableCell>
                <TableCell sx={{ bgcolor: "#FAF4B7" }}>{row.text3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Membertable;

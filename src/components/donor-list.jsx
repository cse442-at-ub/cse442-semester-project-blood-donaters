import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


class DonorList extends Component {
    state = { 
        rows = [
            createData(
              "Abdur",
              "Rahman",
              "O Positive",
              "Buffalo, New York",
              "+123456789"
            ),
            createData(
              "Steven",
              "Smith",
              "B Negative",
              "Brooklyn, New York",
              "+123456789"
            ),
            createData(
              "Michael",
              "Clarke",
              "B Positive",
              "Rochester, New York",
              "+123456789"
            ),
            createData(
              "Adam",
              "Gilchrist",
              "O Negative",
              "Queens, New York",
              "+123456789"
            ),
            createData(
              "Matthew",
              "Hayden",
              "AB Positve",
              "Manhattan, New York",
              "+123456789"
            ),
            createData("Stuart", "Broad", "AB Negative", "Bronx, New York", "+123456789"),
            createData(
              "Shaun",
              "Tait",
              "B Negative",
              "Long Island, New York",
              "+123456789"
            ),
            createData(
              "Morne",
              "Morkel",
              "B Negative",
              "Binghamton, New York",
              "+123456789"
            )
          ]
     }
    render() { 
        return ( 
            <h1>Hello World</h1>
         );
    }
    createData(firstName, lastName, bloodGroup, location, cellphone) {
        return { firstName, lastName, bloodGroup, location, cellphone };
    }
    StyledTableCell = withStyles(theme => ({
        head: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.common.white
        },
        body: {
          fontSize: 14
        }
      }))(TableCell);

      StyledTableRow = withStyles(theme => ({
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.default
          }
        }
      }))(TableRow);
      
      useStyles = makeStyles({
        table: {
          minWidth: 700
        }
      });
}
 
export default DonorList;
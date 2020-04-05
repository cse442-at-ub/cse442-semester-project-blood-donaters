import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class DonorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          FIRSTNAME: "temp",
          LASTNAME: "templast",
          BLOODTYPE: "C-",
          LOCATION: "West Mexico",
          PHONE: "123456789",
        },
      ],
    };
  }
  handleUpdate = async (event) => {
    event.preventDefault();
    let rowsdb = await fetch(`/listdata`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let myJSON = await rowsdb.json();
    if (myJSON == null) {
      alert("Fetching data failed");
    } else {
      this.setState({ rows: myJSON });
    }
  };
  render() {
    return (
      <div>
        <h1 color="blue">Blood Donors List </h1>
        <Button onClick={this.handleUpdate} variant="contained" color="primary">
          Refresh
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Blood Group</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Cell Phone No.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.FIRSTNAME}
                  </TableCell>
                  <TableCell align="right">{row.LASTNAME}</TableCell>
                  <TableCell align="right">{row.BLOODTYPE}</TableCell>
                  <TableCell align="right">{row.LOCATION}</TableCell>
                  <TableCell align="right">{row.PHONE}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export default DonorList;

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
import MaterialTable from 'material-table';
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
       <MaterialTable
        title="Blood Donor List"
        columns={[
          { title: 'First Name',field: 'FIRSTNAME'}, 
          { title: 'Last Name', field: 'LASTNAME' },
          { title: 'Blood Type', field: 'BLOODTYPE' },
          { title: 'Location', field: 'LOCATION' },
          { title: 'Cell Phone No.', field: 'PHONE'},
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            let url = '/listdata';
            fetch(url)
              .then(response => response.json())
              .then(result => {
                resolve({
                  data: result.filter(user => user.FIRSTNAME.includes(query.search)
                        || user.LASTNAME.includes(query.search)
                        || user.BLOODTYPE.includes(query.search)
                        || user.LOCATION.includes(query.search)
                        || user.PHONE.includes(query.search))
                  
                })
              })
          })
        }
        options={{
          search: true
        }}
      />
     </div>
       
    );
  }
}
export default DonorList;

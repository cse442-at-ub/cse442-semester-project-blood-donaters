import React, {useState}  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


var mysql = require('mysql');

var myStyles = makeStyles(theme => ({
    card: {
        height: "35%",
        width: "35%",
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    container: {
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8),
        margin: theme.spacing(5),
        display: "flex",
        justifyContent: "center"
    },
    text: {
        visibility: "visible"
    },
    paper: {
        background: "red",
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column"
    },
    grid: {
        alignItems: "stretch",
        flexGrow: 2
    }
}));


export default function Profilepage() {
const styles = myStyles();


//Database connection stuff


// Variables to fill up user information.
const [blood, setBlood] = useState('O Positive');
const [weight, setWeight] = useState('210');
const [height, setHeight] = useState('71');
return (
    
    <Typography>
    <Container className={styles.container}>
        <Card className={styles.card}>
            <img alt='No Image Available.' src={require("../assets/dracula.jpg")} />
            <Typography variant="h4">Count Dracula</Typography>
            <Button variant="contained" >
                Edit Info
             </Button>
        </Card>
        <Grid className={styles.grid}>
            <Paper className={styles.paper}>BloodType: {blood} <TextField className={styles.text} id="standard-blood" label="New Blood Type"/></Paper>
            <Paper className={styles.paper}>Weight: {weight} Pounds<TextField className={styles.text} id="standard-weight" label="New Weight"/></Paper>
            <Paper className={styles.paper}>Height: {height} inches<TextField className={styles.text} id="standard-height" label="New Height"/></Paper>
            <Button className={styles.text} variant="contained" onClick={() =>{this.setBlood(document.getElementById("standard-blood").value);}}>Submit Changes</Button>
        </Grid>

    </Container>
    </Typography>
);
}

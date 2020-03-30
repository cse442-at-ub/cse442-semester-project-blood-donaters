import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

const myStyles = makeStyles(theme => ({
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
    paper: {
        background: "red",
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column"
    },
    grid: {
        direction: "column",
        justify: "flex-start",
        alignItems: "stretch",
        flexGrow: 2
    }
}));

export default function profilepage() {
const styles = myStyles();

// Variables pulled from dataabse to fill up user information.
let blood = "O Positive";
var weight = '180';
var height = '71';

return (
    
    <Typography>
    <Container className={styles.container}>
        <Card className={styles.card}>
            <img alt='No Image Available.' src={require("../assets/dracula.jpg")} />
            <Typography variant="h4">Count Dracula</Typography>
            <Button variant="contained">
                Edit Info
             </Button>
        </Card>
        <Grid className={styles.grid}>
            <Paper className={styles.paper}>BloodType: {blood} </Paper>
            <Paper className={styles.paper}>Weight: {weight} Pounds</Paper>
            <Paper className={styles.paper}>Height: {height} inches</Paper>
        </Grid>
    </Container>
    </Typography>
);
}

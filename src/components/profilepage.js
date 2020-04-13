import React, {useState, useEffect}  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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



export default function Profilepage(props) {
const styles = myStyles();

// Variables to fill up user information.
const [blood, setBlood] = useState('B-');
const [weight, setWeight] = useState('190');
const [height, setHeight] = useState('70');

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

// Note: the empty deps array [] means
// this useEffect will run once
// similar to componentDidMount()
useEffect(() => {
  fetch("./profile-api")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result.items);
      },

      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [])


function submitOnclick(){
    setBlood(document.getElementById('standard-blood').value);
    document.getElementById('standard-blood').value = "";
    setWeight(document.getElementById('standard-weight').value);
    document.getElementById('standard-weight').value = "";
    setHeight(document.getElementById('standard-height').value);
    document.getElementById('standard-height').value = "";
}



return (
    
    <Typography>
    <Container className={styles.container}>
        <Card className={styles.card}>
            <img alt='No Image Available.' src={require("../assets/dracula.jpg")} />
            <Typography variant="h4">admin</Typography>
            <Button variant="contained" >
                Edit Info
             </Button>
        </Card>
        <Grid className={styles.grid}>
            <Paper className={styles.paper}>BloodType: {blood} <TextField className={styles.text} id="standard-blood" label="New Blood Type"/></Paper>
            <Paper className={styles.paper}>Weight: {weight} Pounds<TextField className={styles.text} id="standard-weight" label="New Weight"/></Paper>
            <Paper className={styles.paper}>Height: {height} inches<TextField className={styles.text} id="standard-height" label="New Height"/></Paper>
            <Button className={styles.text} variant="contained" onClick={submitOnclick}>Submit Changes</Button>
        </Grid>

    </Container>
    </Typography>
);
}

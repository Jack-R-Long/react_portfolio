import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "@material-ui/core";
import { GitHub, Twitter, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "3rem",
      },
    },
  },
}));


const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <div className={classes.form}>
        <Typography variant="h5" className={classes.heading}>
          Contact
        </Typography>
        <Grid container justify="center" spacing={8}>
            <div class="badge-base LI-profile-badge" 
              data-locale="en_US" 
              data-size="medium" 
              data-theme="dark" 
              data-type="HORIZONTAL" 
              data-vanity="jack-long-953201157" 
              data-version="v1">
                <a class="badge-base__link LI-simple-link" 
                href="https://www.linkedin.com/in/jack-long-953201157?trk=profile-badge">
                </a>
            </div>
            <Grid item>            
              <Link className={classes.root} rel="noreferrer" href="https://www.linkedin.com/in/jack-long-953201157" target="_blank"> 
                <LinkedIn fontSize="large"></LinkedIn>
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.root} rel="noreferrer" href="https://github.com/Jack-R-Long" target="_blank"> 
                <GitHub fontSize="large"></GitHub>
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.root} rel="noreferrer" href="https://twitter.com/Lets_Go_Moon" target="_blank"> 
                <Twitter fontSize="large"></Twitter>
              </Link>
            </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Contact;

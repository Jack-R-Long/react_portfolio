import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "@material-ui/core";
import { GitHub, Twitter, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <Link href="https://www.linkedin.com/in/jack-long-953201157" target="_blank"> 
        <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
      </Link>
      <Link href="https://github.com/Jack-R-Long" target="_blank"> 
        <BottomNavigationAction icon={<GitHub />} className={classes.root} />
      </Link>
      <Link href="https://twitter.com/Lets_Go_Moon" target="_blank"> 
        <BottomNavigationAction icon={<Twitter />} className={classes.root} />
      </Link>
    </BottomNavigation>
  );
};
export default Footer;

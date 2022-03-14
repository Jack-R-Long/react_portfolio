import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Particles from "./Particles";

import MileHighApeClub from "../images/ape.png";
import NFT from "../images/nft_gallery.png";
import Inception from "../images/inception.png";
import Smart from "../images/smart_home.png";
import subnetting from "../images/subnetting.png";
import CSVtoXML from "../images/f22.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#080837",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Mile High Ape Club",
    description: `Solana NFT collection. Generated 6,200 NFTs that now have a \
    floor of 3.2 sol.  Co-developed Mile High Ape Club raffle and staking DApps.\
    Backend contracts written in Rust using the Anchor framework.`,
    image: MileHighApeClub,
    link: "https://www.milehighapeclub.com/"
  },
  {
    name: "Smart Caregiver",
    description: `Enterprise size e-commerce and marketing website. \
    Updated the site to handle HTTPS traffic, migrated to a modern cloud-hosted \
    server, and built SEO tracking tools with Google Analytics.`,
    image: Smart,
    link: "https://smartcaregiver.com/"
  },
  {
    name: "NFT Grab",
    description: `UI tool that lists NFT metadata.  Built around Metaplex \
    wallet adapter.  Integrates with Phantom, Torus, Ledger etc.  Solana API  \
    and Axios to query and list NFTs from the blockchain.  Built on Create-\
    React-App Typescript template.`,
    image: NFT,
    link: "https://main.d3bzs39rqq2blz.amplifyapp.com/"
  },
  {
    name: "CSV to XML",
    description: `Conversion tool for comma separated value (CSV) data to \
    extensible markup language (XML).  Built as a proof of concept for the \
    Air Education Training Command Tech Roadshow.  The project was aimed at \
    streamlining the way Air Force class data is handled. `,
    image: CSVtoXML,
    link: "https://main.d257eii0g86dl5.amplifyapp.com/"
  },
  {
    name: "Learn Subnetting",
    description: `Education tool to teach subnetting.  Built with Django,  \
    this Python app generates semi-random subnetting quiz questions.  Side project \
    I created to help students in my IT class.  Currently deployed with AWS \
    Amplify.`,
    image: subnetting,
    link: "https://main.d1dpcbcaxnxk9a.amplifyapp.com/"
  },
  {
    name: "Evo NFT Launch Pad",
    description: `In the works.`,
    image: Inception,
    link: "https://github.com/Jack-R-Long"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Particles/>
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={classes.cardContainer}>
                <CardActionArea href={project.link}>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

    </React.Fragment>
  );
};

export default Portfolio;

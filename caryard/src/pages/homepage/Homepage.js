import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '../assets/style.css';
import homeImage from "./home3.png"



const useStyles = makeStyles((theme) => ({

    // mainIntro: {
    //     textAlign: "left",
    //     padding: 6,
    //     // marginTop: 50
    // },
    introSection: {
        fontFamily: "Helvetica",
        color: "black",
        border: "1px solid black",
        textAlign: "center",
        fontSize: "10px",
        width: "50%",
        borderRadius: "45px",
        cursor: "pointer",
        padding: "-30px",
        marginLeft: '60px',
        marginTop: '20px'

    },
    introQuote: {
        padding: 36,
        color: 'black'

    },

    mainGridItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(26),
        marginLeft: '50px',
        marginTop: '50px'

    },

    myImage: {
        padding: "30px 30px",
        marginLeft: '50px',
        marginTop: '50px'

    },
    home: {
        // backgroundColor: '#0B4759',
        padding: '50px',
        border: 'auto',
        
    }

}));

function Homepage() {
    const myStyles = useStyles();

    return (
        <div className={myStyles.home}>
            <Grid container spacing={3}>

                <Grid item sm={12} xs={12} lg={6} className={myStyles.myImage} >
                    <img src={homeImage} alt="" width="100%" height="100%" />
                </Grid>

                <Grid item sm={12} xs={12} lg={3} className={myStyles.mainGridItem} id="home">
                    <Typography className={myStyles.introQuote}>

                        Check Out The Best Car Deals On Our Website.
                        From the latest car models to the good old classics.
                        Car Yard Got You Covered.
                    </Typography>

                    <Typography className={myStyles.introSection} variant="p" component="p" id="me">
                        <h2 className="visit-us">Visit Us</h2>
                    </Typography>

                </Grid>


            </Grid>

        </div>
    )
}

export default Homepage

import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../assets/style.css'
import homecar from "../assets/homecar.jpg"
import car1 from "../assets/car1.jpg"
import car2 from "../assets/car2.jpg"
import car3 from "../assets/car3.jpg"
import car4 from "../assets/car4.jpg"
import car5 from "../assets/car5.jpg"
import car6 from "../assets/car6.jpg"
import car7 from "../assets/car7.jpg"


function CarPage() {
    return (
        <div className="cars">
            <Typography>
                <h2>Our Vehicles</h2>
            </Typography>


            <Grid container spacing={6}>
                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <img src={homecar} alt="" width="100%" height="60%" />
                    <p>car 1</p>

                </Grid>

                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <img src={car1} alt="" width="100%" height="60%" />
                    <p>car2</p>
                </Grid>
                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <img src={car2} alt="" width="100%" height="60%" />
                    <p> car 3</p>
                </Grid>
                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <img src={car3} alt="" width="100%" height="60%" />
                    <p> car 4</p>
                </Grid>
                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <img src={car4} alt="" width="100%" height="60%" />
                    <p>car 5</p>
                </Grid>

                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <img src={car5} alt="" width="100%" height="60%" />
                    <p>car 6</p>
                </Grid>
                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <img src={car6} alt="" width="100%" height="60%" />
                    <p>car 7</p>
                </Grid>
                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <img src={car7} alt="" width="100%" height="60%" />
                    <p>car 8</p>
                </Grid>


            </Grid>



        </div>
    )
}

export default CarPage

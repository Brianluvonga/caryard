import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../assets/style.css';




function Car_Details() {
    return (
        <div>

            <Grid spacing={3}>
                <Grid item sm={12} xs={12} lg={3} className="car-card">
                    <Typography>
                        <h3 class="car-details">Car Details</h3>
                    </Typography>
                </Grid>

            </Grid>

        </div>
    )
}

export default Car_Details

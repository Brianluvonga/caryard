import React from 'react'
import '../assets/style.css'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function Credit_Card() {

    return (
        <div className="card-payment">

            <Grid container spacing={2}>
                <Grid item sm={12} xs={12} lg={6}>
                    <Typography>
                        <p>Credit Card Details</p>
                    </Typography>

                </Grid>

                <Grid item sm={12} xs={12} lg={6} >
                  
                    <input type="text" className="card-input"></input>
                    <input type="text" className="card-input"></input><br></br>
                    <input type="text" className="card-input"></input>
                    <input type="text" className="card-input" placeholder="Year Of Expiry"></input><br></br>
                    <input type="text" className="card-input"></input>
                    <button type="submit" className="card-btn">Pay</button>

                </Grid>


            </Grid>


        </div>
    )
}

export default Credit_Card

import React from 'react'
import '../assets/style.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function signUp() {


    function handleSignUp() { }
    return (
        <div className="sign-up">
            <Grid container spacing={3}>
                <Grid item sm={12} xs={12} lg={6}>
                    <Typography className="sign-up-header">
                        <p>Car-Yard Sign Up</p>
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} lg={6} className="appointment">
                    <form action={handleSignUp()}>
                        <input type="text" className="form-control" placeholder="Full Names"></input><br></br>
                        <input type="email" className="form-control" placeholder="Email"></input><br></br>
                        <input type="tel" className="form-control" placeholder="Phone No"></input><br></br>
                        <input type="password" className="form-control" placeholder="Password"></input><br></br>
                        <input type="password" className="form-control" placeholder="Confirm Password"></input><br></br>

                        <button type="submit" className="btn-register">Register</button>

                    </form>

                </Grid>
            </Grid>


        </div>
    )
}

export default signUp

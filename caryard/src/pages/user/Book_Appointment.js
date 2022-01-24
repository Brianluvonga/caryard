import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../assets/style.css';




function Book_Appointment() {
    return (
        <div className="book-appointment">
            <Grid container spacing={1}>
                <Grid item sm={12} xs={12} lg={6}>
                    <Typography>
                        <p>Book Appointment</p>
                    </Typography>
                </Grid>


                <Grid item sm={12} xs={12} lg={6} className="appointment">

                    <form>
                        <input type="text" className="form-control" placeholder="Car Model"></input>
                        <input type="text" className="form-control" placeholder="Name"></input><br></br>
                        <input type="text" className="form-control" placeholder="Time"></input>
                        {/* <input type="date" className="form-control" placeholder="Year Of Birth"></input> */}
                        <input type="text" className="form-control" placeholder="Name"></input><br></br>
                        <input type="text" className="form-control" placeholder="ID NO"></input>

                        <button type="submit" className="btn-book">Book</button>


                    </form>


                </Grid>


            </Grid>

        </div>
    )
}

export default Book_Appointment

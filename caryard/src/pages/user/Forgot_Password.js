
import React from 'react'
import '../assets/style.css'


function Forgot_Password() {
    return (
        <div className="forgot-password">
            <h3>Forgot Password</h3>

            <input type="email" placeholder="email address" className="input"></input>
            <input type="password" placeholder="new password" className="input"></input><br></br>
            <button type="submit" className="btn-btn">Reset</button>

        </div>
    )
}

export default Forgot_Password

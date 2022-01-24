import React from 'react'

function Login() {


    function handleLogin() {}
    return (
        <div className="sign-up">
            <h2>Sign In</h2>
            <form action={handleLogin()}>
                <input type="email" className="form-control" placeholder="email"></input><br></br>
                <input type="password" className="form-control" placeholder="password"></input><br></br>
                <button type="submit" className="btn-btn">Login</button>


            </form>
        </div>
    )
}

export default Login

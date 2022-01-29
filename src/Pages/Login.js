import React, { useContext } from "react";
import { LoginContext } from "../helpers/Context";

function Login() {

    const { loggedIn, setLoggedIn } = useContext(LoginContext)

    const changecontext = () => {
        setLoggedIn("3rd")
    }
    return (
        <>
            {loggedIn ? <h1>You are logged in Loginpage</h1> : <h1>You arent logged in</h1>
            }
            <button onClick={changecontext}>change</button>

        </>)

}

export default Login;

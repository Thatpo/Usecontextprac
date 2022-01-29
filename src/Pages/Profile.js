import React, { useContext } from "react";
import { LoginContext } from "../helpers/Context";

function Profile() {

    const { loggedIn, setLoggedIn } = useContext(LoginContext)

    const changecontext = () => {
        setLoggedIn("1st")
    }
    return (
        <>
            {loggedIn ? <h1>You are logged in profile page</h1> : <h1>You arent logged in</h1>
            }
            <button onClick={changecontext}>change</button>

        </>)

}

export default Profile;

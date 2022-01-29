import React, { useContext } from 'react';
import { LoginContext } from '../helpers/Context';

function Home() {
    const { loggedIn, setLoggedIn } = useContext(LoginContext)

    const changecontext = () => {
        setLoggedIn("2nd")
    }
    return (
        <>
            {loggedIn ? <h1>You are logged in to Home</h1> : <h1>You arent logged in</h1>
            }
            <button onClick={changecontext}>change</button>
        </>)

}

export default Home;
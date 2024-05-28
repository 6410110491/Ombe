import { React, useEffect } from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';


function Signin() {
    const handleLogin = (event) => {
        event.preventDefault();
        // Handle the login logic here
        console.log('Login submitted');
    };
    const onSuccess = (res) => {
        console.log('success', res)
    }

    const onFailure = (res) => {
        console.log('failed', res)
    }

    const changepage = (path) => {
        window.location.href = "/" + path
    }
    return (
        <div >
            <form onSubmit={handleLogin} >
                <h2 style={{ textAlign: 'left' }}>Sign In</h2>
                <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>


                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <div className="form-group" style={{width:"100%"}}>
                        <TextField id="standard-basic" label="Username" variant="standard" type="text" fullWidth
                            style={{ height: '38px', paddingTop: '0.5rem' }} />
                    </div>
                    <div className="form-group" style={{width:"100%"}}>
                        <TextField id="standard-basic" label="Password" variant="standard" type="text" fullWidth
                            style={{ height: '38px', paddingTop: '0.5rem' }} />
                    </div>

                    <Button style={{
                        marginTop: '2rem', backgroundColor: "#03764D", border: 'none', 
                        borderRadius: '20px', height: '48px', width: '300px', color: '#FFFFFF', fontWeight: 'bold',
                        width:"100%"
                    }}>LOGIN
                    </Button>

                </div>
                <p className="mb-0 " style={{ fontSize: '14px', marginTop: '1rem' }} >
                    Forgot password?{" "}
                    <Link onClick={() => changepage("signup")} style={{ color: "#03764D", textDecoration: "none", fontSize: '14px' }}>
                        Reset here
                    </Link>
                </p>

            </form>
            <div className="mt-4" style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <p className="mb-0  text-center" style={{ fontSize: '14px', marginTop: '2rem', textAlign: 'center' }}>
                    Don't have an account?{" "}
                </p>
                <Button style={{ marginTop: '1rem', backgroundColor: "#F7DBB4", border: 'none', borderRadius: '20px', height: '48px'
                , color: '#5B5046', fontWeight: 'bold', width:"100%"}}>
                    CREATE AN ACCOUNT
                </Button>
            </div>
        </div>


    )
}

export default Signin
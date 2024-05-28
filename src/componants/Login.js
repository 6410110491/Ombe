import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div >
                <h2>Mornig begins with Obma coffee</h2>

                <Button style={{
                    marginTop: '2rem', backgroundColor: "#03764D", border: 'none',
                    borderRadius: '20px', height: '48px', width: '300px', color: '#FFFFFF', fontWeight: 'bold',
                    width: "100%"
                }}>Login With Email
                </Button>

                <Button style={{
                    marginTop: '2rem', backgroundColor: "#386AED", border: 'none',
                    borderRadius: '20px', height: '48px', width: '300px', color: '#FFFFFF', fontWeight: 'bold',
                    width: "100%"
                }}>Login With Facebook
                </Button>


                <Button style={{
                    marginTop: '1rem', backgroundColor: "#FFFFFF",
                    borderRadius: '20px', height: '48px', width: '300px', color: '#000000', fontWeight: 'bold',
                    width: "100%", border: "1px solid #000"
                }}>Login With Google
                </Button>
            </div>
        </div>

    )
}

export default Login
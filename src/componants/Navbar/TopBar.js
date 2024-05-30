import React from 'react'
import "./Topbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function TopBar() {
    return (
        <Navbar key="false" expand="false"
            style={{
                marginTop: "1rem",
                padding: "0.25rem 0.5rem",
            }}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <div className='brand'>
                        <p className='brand-haeder'>Good Morning</p>
                        <p className='brand-sub'>Williams</p>
                    </div>
                </Navbar.Brand>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                    <div style={{ position: "relative" }}>
                        <i className="bi bi-handbag"
                            style={{
                                fontSize: "1.5rem",
                                padding: "4px 12px",
                                fontWeight: "500",
                                color: "#177C55",
                                position: "absolute",
                                right: "0",
                                bottom: "-15px"
                            }}
                        ></i>
                        <i className="fa fa-circle active" style={{
                            color: "#04764e",
                            fontSize: "13px",
                            border: "2px solid #fff",
                            position: "absolute",
                            right: "5px",
                            top: "-20px",
                            borderRadius: "50%",
                        }}></i>
                    </div>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`}>
                        <i className="fa-solid fa-bars-staggered"></i>
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-false`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton style={{
                            marginTop: "1.25rem", padding: "15px 25px",
                            fontSize: "28px",
                        }} >
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                Ombe | Coffee Shop
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/started" style={{
                                    fontSize: "1.125rem", fontWeight: "400",
                                    padding: "15px 25px"
                                }}>
                                    <i class="fa-solid fa-house"
                                        style={{ marginRight: "20px" }}></i>
                                    Start</Nav.Link>

                                <Nav.Link href="/login" style={{
                                    fontSize: "1.125rem", fontWeight: "400",
                                    padding: "15px 25px"
                                }}>
                                    <i className="fa-solid fa-right-to-bracket"
                                        style={{ marginRight: "20px" }}></i>  Login</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>
            </Container>
        </Navbar >
    )
}

export default TopBar
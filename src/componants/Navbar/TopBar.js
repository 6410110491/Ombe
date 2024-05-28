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
                                bottom:"-15px"
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
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-false`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>
            </Container>
        </Navbar >
    )
}

export default TopBar
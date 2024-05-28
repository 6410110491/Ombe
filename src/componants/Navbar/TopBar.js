import React from 'react'
import "./Topbar.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function TopBar() {
    return (
        <Navbar key="md" expand="md"
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
                    alignItems: "center"

                }}>
                    <i class="bi bi-handbag"
                        style={{
                            fontSize: "1.25rem",
                            padding: "0.5rem",
                            marginTop: "-0.8rem",
                        }}
                    ></i>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}
                    >
                        <i className="fa-solid fa-bars-staggered"
                        ></i>
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-md`}
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
import React from 'react'
import "./Topbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function TopBar() {
    return (
        <Navbar key="false" expand="false"
            style={{
                marginTop: "20px", marginBottom: "30px",
                padding: "0"
            }}>
            <Container fluid style={{ padding: '0' }}>
                <Navbar.Brand href="/">
                    <div className='brand'>
                        <p className='brand-haeder' style={{ fontSize: "14px", fontWeight: '400', color: '#1b1b1b' }}>
                            สวัสดีตอนเช้า
                        </p>
                        <p className='brand-sub' style={{ fontSize: "24px", fontWeight: '600', color: '#1b1b1b', margin: '0' }}>
                            วิลเลียม
                        </p>
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
                                fontSize: "25px",
                                padding: "4px 12px",
                                fontWeight: 'bold',
                                color: "#177C55",
                                position: "absolute",
                                right: "0",
                                bottom: "-15px"
                            }}
                        ></i>
                        <i className="fa fa-circle active" style={{
                            color: "#04764e",
                            fontSize: "12px",
                            border: "2px solid #fff",
                            position: "absolute",
                            right: "-3px",
                            top: "-25px",
                            borderRadius: "50%",
                            padding: "4px 12px",
                        }}></i>
                    </div>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} style={{
                        fontSize: '25px',
                        padding: "4px 0 4px 12px"
                    }}>
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
                                    <i className="fa-solid fa-house"
                                        style={{ marginRight: "20px", color: "#04764e" }}></i>
                                    เริ่มต้น</Nav.Link>

                                <Nav.Link href="/login" style={{
                                    fontSize: "1.125rem", fontWeight: "400",
                                    padding: "15px 25px"
                                }}>
                                    <i className="fa-solid fa-right-to-bracket"
                                        style={{ marginRight: "20px", color: "#04764e" }}></i>
                                    เข้าสู่ระบบ</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>
            </Container>
        </Navbar >
    )
}

export default TopBar
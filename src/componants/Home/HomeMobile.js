import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

function HomeMobile() {
    return (
        <div style={{
            padding: "1rem",
        }}>
            <Form style={{ position: 'relative' }}>
                <Form.Control
                    type="text"
                    placeholder="Search beverages or foods"
                    style={{ borderRadius: "1rem" }}
                />
                <span
                    className="search-icon"
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "45%",
                        transform: "translateY(-50%)",
                        cursor: "pointer"
                    }}
                >
                    <i className="bi bi-search"></i>
                </span>
            </Form>

            <Container style={{ marginTop: "8rem", display: "flex", justifyContent: "center" }}>
                <Card style={{
                    backgroundColor: "#177C55", borderRadius: "2.25rem",
                    width: "18rem", height: "20rem", position: 'relative',
                    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                }}>
                    <Card.Body style={{
                        display: "flex", flexDirection: "column", justifyContent: "flex-end",
                        alignItems: "center"
                    }}>
                        <div style={{
                            display: "flex", justifyContent: "center",
                            position: "absolute", transform: "translateY(-40%)",
                        }}>
                            <img src="https://media-public.canva.com/GouPo/MAEWVAGouPo/1/tl.png"
                                style={{
                                    maxWidth: "80%", height: "auto",
                                }} />
                        </div>

                        <Card.Title style={{ color: "#fff", fontWeight: "400" }}>
                            Creamy Ice Coffee
                        </Card.Title>
                        <Card.Subtitle
                            style={{ color: "#fff", fontWeight: "300", fontSize: "1.5rem" }}>
                            $ 5.8
                            <span style={{
                                fontSize: "1.25rem", textDecorationLine: "line-through",
                                color: "#499D7E", marginLeft: "0.5rem"
                            }}>$8.0</span>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>



            </Container>

        </div >
    )
}

export default HomeMobile
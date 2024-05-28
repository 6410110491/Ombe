import React from 'react'
import "./Home.css"
import { Form } from 'react-bootstrap'
import TopBar from '../Navbar/TopBar.js'

function HomeMobile() {
    return (
        <div style={{
            padding: "1rem",
            maxWidth: "1024px",
            margin: "0 auto",
            marginBottom: "3rem"
        }}>
            <TopBar />

            <Form style={{ position: 'relative' }}>
                <Form.Control
                    type="text"
                    placeholder="Search beverages or foods"
                    style={{ borderRadius: "50px", height: "60px", border: "1px solid #e9e9e9", color: "#585858", fontWeight: "400" }}
                />
                <span
                    className="search-icon"
                    style={{
                        position: "absolute",
                        right: "20px",
                        top: "45%",
                        transform: "translateY(-50%)",
                        cursor: "pointer"
                    }}
                >
                    <i className="bi bi-search" style={{ fontSize: "18px", color: "#585858" }}></i>
                </span>
            </Form>

            <swiper-container slides-per-view="auto" space-between="20" mousewheel-invert="true">
                <swiper-slide >
                    <div style={{
                        backgroundColor: "#04764e", height: "250px", width: "205px",
                        borderRadius: "30px", marginTop: "50px", position: "relative"
                    }}>
                        <div style={{ position: "absolute", top: "-50px", left: "20px" }}>
                            <img src="https://ombe.dexignzone.com/xhtml/img/products/featured/pic1.png"
                                style={{
                                    height: "200px", objectFit: "cover", width: "auto"
                                }} />
                        </div>
                        <div style={{ position: "absolute", bottom: "15px", padding: "5px 16px" }}>
                            <p className='card-text card-name'>Creamy Ice Coffe</p>
                            <p className='card-text card-price'
                                style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>$ 5.8
                                <span style={{
                                    fontSize: "1rem",
                                    textDecoration: "line-through", color: "#53A688", marginLeft: "0.5rem"
                                }}>$ 9.9</span>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div style={{
                        backgroundColor: "#04764e", height: "250px", width: "205px",
                        borderRadius: "30px", marginTop: "50px", position: "relative"
                    }}>
                        <div style={{ position: "absolute", top: "-50px", left: "20px" }}>
                            <img src="https://ombe.dexignzone.com/xhtml/img/products/featured/pic2.png"
                                style={{
                                    height: "200px", objectFit: "cover", width: "auto",
                                }} />
                        </div>
                        <div style={{ position: "absolute", bottom: "15px", padding: "5px 16px" }}>
                            <p className='card-text card-name'>Indonesian Tea</p>
                            <p className='card-text card-price'
                                style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>$ 2.5
                                <span style={{
                                    fontSize: "1rem",
                                    textDecoration: "line-through", color: "#53A688", marginLeft: "0.5rem"
                                }}>$ 5.4</span>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide >
                    <div style={{
                        backgroundColor: "#04764e", height: "250px", width: "205px",
                        borderRadius: "30px", marginTop: "50px", position: "relative",
                    }}>
                        <div style={{ position: "absolute", top: "-50px", left: "20px" }}>
                            <img src="https://ombe.dexignzone.com/xhtml/img/products/featured/pic1.png"
                                style={{
                                    height: "200px", objectFit: "cover", width: "auto"
                                }} />
                        </div>
                        <div style={{ position: "absolute", bottom: "15px", padding: "5px 16px" }}>
                            <p className='card-text card-name'>Creamy Ice Coffe</p>
                            <p className='card-text card-price'
                                style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>$ 5.8
                                <span style={{
                                    fontSize: "1rem",
                                    textDecoration: "line-through", color: "#53A688", marginLeft: "0.5rem"
                                }}>$ 9.9</span>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div style={{
                        backgroundColor: "#04764e", height: "250px", width: "205px",
                        borderRadius: "30px", marginTop: "50px", position: "relative"
                    }}>
                        <div style={{ position: "absolute", top: "-50px", left: "20px" }}>
                            <img src="https://ombe.dexignzone.com/xhtml/img/products/featured/pic2.png"
                                style={{
                                    height: "200px", objectFit: "cover", width: "auto"
                                }} />
                        </div>
                        <div style={{ position: "absolute", bottom: "15px", padding: "5px 16px" }}>
                            <p className='card-text card-name'>Indonesian Tea</p>
                            <p className='card-text card-price'
                                style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>$ 2.5
                                <span style={{
                                    fontSize: "1rem",
                                    textDecoration: "line-through", color: "#53A688", marginLeft: "0.5rem"
                                }}>$ 5.4</span>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>



            <div className='catagory'>
                <p className='catagory-text'>Categories</p>

                <swiper-container slides-per-view="auto" space-between="20" mousewheel-invert="true">
                    <swiper-slide>
                        <div className='catagory-card'>
                            <div style={{ marginRight: "20px", height: "100%" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16"
                                    style={{ height: "24px", width: "24px", color: "#04764e" }}>
                                    <path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"></path>
                                    <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"></path>
                                </svg>
                            </div>
                            <div>
                                <p style={{ fontWeight: "600", marginBottom: "5px" }}>Beverages</p>
                                <p style={{ fontWeight: "500", color: "#04764e", marginBottom: "0" }}>67 Menus</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='catagory-card'>
                            <div style={{ marginRight: "20px", height: "100%" }}>
                                <i className="fa-solid fa-burger"
                                    style={{ fontSize: "24px", color: "#04764e" }}
                                ></i>
                            </div>
                            <div>
                                <p style={{ fontWeight: "600", marginBottom: "5px" }}>Foods</p>
                                <p style={{ fontWeight: "500", color: "#04764e", marginBottom: "0" }}>23 Menus</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='catagory-card'>
                            <div style={{ marginRight: "20px", height: "100%" }}>
                                <i className="fa-solid fa-pizza-slice"
                                    style={{ fontSize: "24px", color: "#04764e" }}></i>
                            </div>
                            <div>
                                <p style={{ fontWeight: "600", marginBottom: "5px" }}>Pizza</p>
                                <p style={{ fontWeight: "500", color: "#04764e", marginBottom: "0" }}>28 Menus</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='catagory-card'>
                            <div style={{ marginRight: "20px", height: "100%" }}>
                                <i className="fa-solid fa-martini-glass-citrus"
                                    style={{ fontSize: "24px", color: "#04764e" }}></i>
                            </div>
                            <div>
                                <p style={{ fontWeight: "600", marginBottom: "5px" }}>Drink</p>
                                <p style={{ fontWeight: "500", color: "#04764e", marginBottom: "0" }}>12 Menus</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='catagory-card'>
                            <div style={{ marginRight: "20px", height: "100%" }}>
                                <i className="fa-solid fa-bell-concierge"
                                    style={{ fontSize: "24px", color: "#04764e" }}></i>
                            </div>
                            <div>
                                <p style={{ fontWeight: "600", marginBottom: "5px" }}>Lunch</p>
                                <p style={{ fontWeight: "500", color: "#04764e", marginBottom: "0" }}>67 Menus</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='catagory-card'>
                            <div style={{ marginRight: "20px", height: "100%" }}>
                                <i className="fa-solid fa-burger"
                                    style={{ fontSize: "24px", color: "#04764e" }}
                                ></i>
                            </div>
                            <div>
                                <p style={{ fontWeight: "600", marginBottom: "5px" }}>Burger</p>
                                <p style={{ fontWeight: "500", color: "#04764e", marginBottom: "0" }}>22 Menus</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>

            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <p style={{ fontSize: "1.125rem", fontWeight: "600", lineHeight: "1.4" }}>Featured Beverages</p>
                    <p style={{
                        fontSize: "1rem", fontWeight: "600", lineHeight: "1.4", color: "#04764e",
                        padding: "0px 16px"
                    }}>More</p>
                </div>

                <div style={{ display: "flex", marginBottom: "40px" }}>
                    <div style={{ minWidth: "120px", maxWidth: "120px", position: "relative", marginRight: "20px" }}>
                        <img src='https://skyborn.in/cdn/shop/products/COFFEEMUGCAPPUCCINO_LATTE_BIGTEACUP.CRYSTALCLEARGLASSCUPS_ESPRESSOCOFFEEGIFTSPACKOF_8_-220ML_800x.webp?v=1674042566'
                            alt='' style={{ width: "100%", height: "100%", borderRadius: "18px" }}
                        />
                        <div style={{
                            padding: "5px 16px",
                            backgroundColor: "#ff8730",
                            borderRadius: "20px",
                            color: "#fff",
                            alignItems: "center",
                            position: "absolute",
                            boxSizing: "border-box",
                            bottom: "-15px",
                            left: "20px"
                        }}>
                            <i className="fa-solid fa-star" style={{ marginRight: "0.5rem" }}></i>
                            <span>3.8</span>
                        </div>
                    </div>

                    <div style={{ width: "100%" }}>
                        <p style={{ fontWeight: "600", fontSize: "1.125rem" }}>Hot Creamy Cappuccino Latte Ombe</p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ fontWeight: "600", fontSize: "1.25rem" }}>
                                $12.6
                            </p>
                            <p style={{ fontWeight: "600", fontSize: "1.25rem", color: "#04764e" }}>
                                50 Pts
                            </p>
                        </div>
                    </div>
                </div>



                <div style={{ display: "flex", marginBottom: "20px" }}>
                    <div style={{ minWidth: "120px", maxWidth: "120px", position: "relative", marginRight: "20px" }}>
                        <img src='https://www.artworkcrafts.com/cdn/shop/products/1_13_5a32e58c-9d9a-4a90-8e35-b6a273d7ea0e_300x300.jpg?v=1684795576'
                            alt='' style={{ width: "100%", height: "100%", borderRadius: "18px" }}
                        />
                        <div style={{
                            padding: "5px 16px",
                            backgroundColor: "#ff8730",
                            borderRadius: "20px",
                            color: "#fff",
                            alignItems: "center",
                            position: "absolute",
                            boxSizing: "border-box",
                            bottom: "-15px",
                            left: "20px"
                        }}>
                            <i className="fa-solid fa-star" style={{ marginRight: "0.5rem" }}></i>
                            <span>4.5</span>
                        </div>
                    </div>

                    <div style={{ width: "100%" }}>
                        <p style={{ fontWeight: "600", fontSize: "1.125rem" }}>Ceramic Coffee Cups, </p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ fontWeight: "600", fontSize: "1.25rem" }}>
                                $9.6
                            </p>
                            <p style={{ fontWeight: "600", fontSize: "1.25rem", color: "#04764e" }}>
                                50 Pts
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default HomeMobile
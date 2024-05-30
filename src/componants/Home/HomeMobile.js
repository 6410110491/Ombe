import React from 'react'
import "./Home.css"
import { Form } from 'react-bootstrap'
import TopBar from '../Navbar/TopBar.js'

function HomeMobile() {
    const products = [
        {
            "id": 1,
            "img": "https://ombe.dexignzone.com/xhtml/img/products/featured/pic1.png",
            "title": "Creamy Ice Coffe",
            "price": 5.8,
            "priceDiscount": 9.9
        },
        {
            "id": 2,
            "img": "https://ombe.dexignzone.com/xhtml/img/products/featured/pic2.png",
            "title": "Indonesian Tea",
            "price": 2.5,
            "priceDiscount": 5.4
        },
        {
            "id": 3,
            "img": "https://ombe.dexignzone.com/xhtml/img/products/featured/pic1.png",
            "title": "Creamy Ice Coffe",
            "price": 5.8,
            "priceDiscount": 9.9
        },
        {
            "id": 4,
            "img": "https://ombe.dexignzone.com/xhtml/img/products/featured/pic2.png",
            "title": "Indonesian Tea",
            "price": 2.5,
            "priceDiscount": 5.4
        },

    ]

    const categories = [
        {
            "id": 1,
            "icon": "fa-solid fa-mug-hot",
            "title": "Beverages",
            "menus": 67
        },
        {
            "id": 2,
            "icon": "fa-solid fa-burger",
            "title": "Foods",
            "menus": 23
        },
        {
            "id": 3,
            "icon": "fa-solid fa-pizza-slice",
            "title": "Pizza",
            "menus": 28
        },
        {
            "id": 4,
            "icon": "fa-solid fa-martini-glass-citrus",
            "title": "Drink",
            "menus": 12
        },
        {
            "id": 5,
            "icon": "fa-solid fa-bell-concierge",
            "title": "Lunch",
            "menus": 67
        },
        {
            "id": 6,
            "icon": "fa-solid fa-burger",
            "title": "Burger",
            "menus": 22
        },
    ]


    const changepage = (path) => {
        window.location.href = "/" + path
    }

    return (
        <div style={{
            padding: "1rem",
            maxWidth: "1024px",
            margin: "0 auto",
            marginBottom: "3rem",
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


            {/* Product */}
            <swiper-container slides-per-view="auto" space-between="20" mousewheel-invert="true">
                {products.map((product, index) => {
                    return (
                        <swiper-slide className="Product" key={index} 
                            onClick={() => changepage("productdetail")}>
                            <div style={{
                                backgroundColor: "#04764e", height: "250px", width: "205px",
                                borderRadius: "30px", marginTop: "50px", position: "relative", cursor: "pointer",
                                // boxShadow:" 0px 12px 20px rgb(4, 118, 78, 0.3)"
                            }}>
                                <div style={{ position: "absolute", top: "-50px", left: "20px" }}>
                                    <img src={product.img} alt="product"
                                        style={{
                                            height: "200px", objectFit: "cover", width: "auto"
                                        }} />
                                </div>
                                <div style={{ position: "absolute", bottom: "15px", padding: "5px 16px" }}>
                                    <p className='card-text card-name'>
                                        {product.title}
                                    </p>
                                    <p className='card-text card-price'
                                        style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
                                        $ {product.price}
                                        <span style={{
                                            fontSize: "1rem",
                                            textDecoration: "line-through", color: "#53A688", marginLeft: "0.5rem"
                                        }}>
                                            $ {product.priceDiscount}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                    )
                })}
            </swiper-container>


            {/* Category */}
            <div className='catagory'>
                <p className='catagory-text'>Categories</p>

                <swiper-container slides-per-view="auto" space-between="20" mousewheel-invert="true">
                    {categories.map((category, index) => {
                        return (
                            <swiper-slide key={index} style={{ transform: "translateY(0)" }}>
                                <div className='catagory-card'>
                                    <div style={{ marginRight: "20px", height: "100%" }}>
                                        <i className={category.icon}
                                            style={{ fontSize: "24px", color: "#04764e" }}
                                        ></i>
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: "600", marginBottom: "5px" }}>
                                            {category.title}
                                        </p>
                                        <p style={{ fontWeight: "500", color: "#04764e", marginBottom: "0" }}>
                                            {category.menus} Menus
                                        </p>
                                    </div>
                                </div>
                            </swiper-slide>
                        )
                    })}
                </swiper-container>
            </div>


            {/* Featured Beverages */}
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
                            alt='' style={{ width: "100%", height: "100%", borderRadius: "18px", objectFit: "cover" }}
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
                            alt='' style={{ width: "100%", height: "100%", borderRadius: "18px", objectFit: "cover" }}
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
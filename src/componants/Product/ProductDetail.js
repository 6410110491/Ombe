import React, { useState } from 'react'
import "./Product.css"
import { Form } from 'react-bootstrap'

function ProductDetail() {
    const [rangeValue, setRangeValue] = useState(0);
    const [count, setCount] = useState(0);


    const changepage = (path) => {
        window.location.href = "/" + path
    }

    const handleRangeChange = (event) => {
        setRangeValue(parseInt(event.target.value, 10));
    };

    const handleMinuscount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const handlePluscount = () => {
        setCount(count + 1)
    }
    return (
        <div>

            <div className='banner'>
                <img src='https://ombe.dexignzone.com/xhtml/img/products/single/pic1.png'
                    className='banner-img' alt='banner' />
                <div className='topnav' >
                    <div onClick={() => changepage("")} style={{ cursor: "pointer" }}>
                        <i className="fa-solid fa-arrow-left-long"
                            style={{
                                fontSize: '1rem', backgroundColor: "#4E9E83", width: "40px", height: "40px",
                                borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                            }}>
                        </i>
                    </div>
                    <div className='topnav-text'>Details</div>
                    <div><i className="fa-regular fa-bookmark"
                        style={{ fontSize: '1.5rem' }}
                    ></i></div>
                </div>
            </div>
            <div className='content'>
                <div className='rating'>4.5</div>
                <div className='touchbar-container'>
                    <div className='touchbar'></div>
                </div>

                <div className='title'>Ice Chocolate Coffee</div>
                <div className='sub-title'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </div>

                <div className='range'>
                    <Form style={{ display: "flex", justifyContent: "center" }}>
                        <input type="range" class="form-range" min="0" max="3" step="1" id="customRange3"
                            style={{ width: "90%" }} value={rangeValue}
                            onChange={handleRangeChange} />
                    </Form>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.75rem" }}>
                        <p style={{ fontWeight: (rangeValue === 0) ? "700" : "" }}>Small</p>
                        <p style={{ fontWeight: (rangeValue === 1) ? "700" : "" }}>Medium</p>
                        <p style={{ fontWeight: (rangeValue === 2) ? "700" : "" }}>Large</p>
                        <p style={{ fontWeight: (rangeValue === 3) ? "700" : "" }}>Xtra Large</p>
                    </div>
                </div>

                <div className='price-container'>
                    <div
                        style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                        $ 5.8
                        <span style={{
                            fontSize: "1rem",
                            textDecoration: "line-through", marginLeft: "0.5rem", opacity: "0.5"
                        }}>
                            $ 9.9
                        </span>
                    </div>

                    <div className='count-item'>
                        <div onClick={handleMinuscount} className='changecount'><i class="fa-solid fa-minus"></i></div>
                        <div style={{ fontWeight: "600" }}>{count}</div>
                        <div onClick={handlePluscount} className='changecount'><i class="fa-solid fa-plus"></i></div>
                    </div>

                </div>
                <div className='description'>
                    Indulge in the perfect blend of rich chocolate and robust coffee with our Ice Chocolate Coffee.
                    This refreshing beverage combines smooth, premium chocolate with bold, freshly brewed coffee, delivering a creamy and invigorating experience.
                </div>

                <div className='button'
                    onClick={() => changepage("derivery")}>
                    PLACE ORDER
                    <span style={{
                        fontSize: "1rem",
                        color: "#53A688", marginLeft: "0.5rem"
                    }}>
                        $ 17.4
                    </span>
                </div>

            </div>
        </div >
    )
}

export default ProductDetail
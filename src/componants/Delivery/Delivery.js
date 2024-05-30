import React from 'react'
import "./Delivery.css"

function Delivery() {
    const changepage = (path) => {
        window.location.href = "/" + path
    }
    return (
        <div>
            <div className='top' >
                <div onClick={() => changepage("productdetail")} style={{ cursor: "pointer" }}>
                    <i className="fa-solid fa-arrow-left-long"
                        style={{
                            fontSize: '1.5rem', backgroundColor: "#F6F6F6", width: "40px", height: "40px",
                            borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                        }}>
                    </i>
                </div>
                <div className='toptext'>Tracking Orders</div>
                <div style={{ width: "40px", height: "40px" }}></div>
            </div>

            <div className='map'>

            </div>

            <div className='contect'>
                <div style={{ display: "flex", color: "#FFF", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ marginRight: "1rem" }}>
                        <img src='https://news.uchicago.edu/sites/default/files/styles/square_feature/public/images/2023-10/Adam-Mastroianni-square.jpg?h=daa376fd&itok=YR0-YXHv'
                            style={{ width: "3.75rem", height: "3.75rem", borderRadius: "50%" }} />
                    </div>
                    <div>
                        <div style={{ fontSize: "20px", fontWeight: "400" }}>Mr. Shandy</div>
                        <div>ID 2445556</div>
                    </div>
                </div>
                <div style={{ display: "flex", color: "#FFF", gap: "0.5rem", alignItems: "center" }}>
                    <div onClick={() => changepage("")} style={{ cursor: "pointer" }}>
                        <i className="fa-solid fa-phone"
                            style={{
                                fontSize: '1.5rem', backgroundColor: "#4E9E83", width: "50px", height: "50px",
                                borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                            }}>
                        </i>
                    </div>
                    <div onClick={() => changepage("")} style={{ cursor: "pointer" }}>
                        <i className="fa-regular fa-comment-dots"
                            style={{
                                fontSize: '1.5rem', backgroundColor: "#4E9E83", width: "50px", height: "50px",
                                borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                            }}>
                        </i>
                    </div>
                </div>
            </div>


            <div className='main'>
                <div className='touchbar-container'>
                    <div className='touchbar'></div>

                </div>
                <div style={{ position: "relative" }}>
                    <div className='main-container'>
                        <div onClick={() => changepage("")} className='icon'>
                            <i className="fa-solid fa-location-dot"
                                style={{
                                    fontSize: '1rem', backgroundColor: "#D7ECE5", width: "54px", height: "54px",
                                    borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                                }}>
                            </i>
                        </div>
                        <div>
                            <div className='main-text'>Sweet Corner St.</div>
                            <div className='main-subtext'>Avenue 2263</div>
                        </div>
                    </div>


                    <div style={{
                        height: "calc(100% - 106px)",
                        left: "27px",
                        top: "51px",
                        width: "1px",
                        borderLeft: "2px dashed rgba(0, 0, 0, 0.3)",
                        position: "absolute",
                        zIndex: "1"
                     }}></div>



                <div className='main-container'>
                    <div onClick={() => changepage("")} className='icon'>
                        <i className="fa-solid fa-store"
                            style={{
                                fontSize: '1rem', width: "54px", height: "54px", border: "1px solid #D7ECE5",
                                borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                            }}>
                        </i>
                    </div>
                    <div>
                        <div className='main-text'>Sweet Corner St.</div>
                        <div className='main-subtext'>Avenue 2263</div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Delivery
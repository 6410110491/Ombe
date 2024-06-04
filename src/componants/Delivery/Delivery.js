import React from 'react'
import "./Delivery.css"

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Delivery() {
    const changepage = (path) => {
        window.location.href = "/" + path
    }
    const containerStyle = {
        width: '100%',
        height: '600px'
    };

    const center = {
        lat: 9.104550850965135,
        lng: 99.33139479659042
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAOvkP70_7dyb4qZUQsTV9iZNyPl0fa8pA"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className='top' >
                <div onClick={() => changepage("productdetail")} style={{ cursor: "pointer" }}>
                    <i className="fa-solid fa-arrow-left-long"
                        style={{
                            fontSize: '24px', backgroundColor: "#F6F6F6", width: "46px", height: "46px",
                            borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                        }}>
                    </i>
                </div>
                <div className='toptext' style={{ fontWeight: '600' }}>ติดตามคำสั่งซื้อ</div>
                <div style={{ width: "40px", height: "40px" }}></div>
            </div>

            <div className='map'>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={2}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <Marker
                            position={center}
                        />
                    </GoogleMap>
                ) : <></>
                }
            </div>

            <div className='contect'>
                <div style={{ display: "flex", color: "#FFF", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ marginRight: "1rem" }}>
                        <img src='https://news.uchicago.edu/sites/default/files/styles/square_feature/public/images/2023-10/Adam-Mastroianni-square.jpg?h=daa376fd&itok=YR0-YXHv'
                            style={{ width: "3.75rem", height: "3.75rem", borderRadius: "50%" }} alt='profile' />
                    </div>
                    <div>
                        <div style={{ fontSize: "20px", fontWeight: "400" }}>นาย แซนดี้</div>
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
                            <div className='main-text'>ถนนเลี่ยงเมือง</div>
                            <div className='main-subtext'>ตำบล มะขามเตี้ย</div>
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
                            <div className='main-text'>ถนนเลี่ยงเมือง</div>
                            <div className='main-subtext'>ตำบล มะขามเตี้ย</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Delivery
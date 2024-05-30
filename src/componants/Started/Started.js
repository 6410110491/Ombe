import React, { useRef, useState } from 'react';
import './Started.css';
import { Button } from "react-bootstrap";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Started() {
    const swiperRef = useRef(null);
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            if (swiper.activeIndex === swiper.slides.length - 1) {
                changepage("login")
            } else {
                swiper.slideNext();
            }
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const changepage = (path) => {
        window.location.href = "/" + path
    }
    return (
        <div>
            <div style={{ padding: "70px 30px 0px 30px " }}>
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                    style={{ width: '100%', height: '100%' }}
                >
                    <SwiperSlide>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src='https://ombe.dexignzone.com/xhtml/img/svg/illustration.svg'
                                style={{ width: '235px', height: '242px', margin: '70px' }} />
                            <div style={{ padding: '0px 15px', marginTop: '50px' }}>
                                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', lineHeight: '30px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>
                                    Let’s meet our summer coffee drinks
                                </h2>
                                <p className="subtext" style={{ fontSize: '14px', textAlign: 'center', paddingBottom: '40px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src='https://ombe.dexignzone.com/xhtml/img/svg/coffee-mug.svg'
                                style={{ width: '235px', height: '242px', margin: '70px' }} />
                            <div style={{ padding: '0px 15px', marginTop: '50px' }}>
                                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', lineHeight: '30px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>
                                    Start your morning with great coffee
                                </h2>
                                <p className="subtext" style={{ fontSize: '14px', textAlign: 'center', paddingBottom: '40px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src='https://ombe.dexignzone.com/xhtml/img/svg/coffee-cup.svg'
                                style={{ width: '235px', height: '242px', margin: '70px' }} />
                            <div style={{ padding: '0px 15px', marginTop: '50px' }}>
                                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', lineHeight: '30px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>
                                    Best coffee shop in this town
                                </h2>
                                <p className="subtext" style={{ fontSize: '14px', textAlign: 'center', paddingBottom: '40px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                <Button style={{
                    backgroundColor: "#ffffff", border: "0.5px solid #d9d9d9",
                    borderRadius: '50px', padding: '18px 25px', height: 'auto', color: '#000000', fontWeight: 'bold',
                    width: "40%", fontSize: '16px', margin: '5px'
                }} onClick={handlePrev}>BACK
                </Button>



                <Button style={{
                    backgroundColor: "#03764D", border: 'none',
                    borderRadius: '50px', padding: '18px 25px', height: 'auto', color: '#FFFFFF', fontWeight: 'bold',
                    width: "40%", fontSize: '16px', margin: '5px'
                }} onClick={handleNext}>NEXT
                </Button>
            </div>
        </div>
    )
}

export default Started
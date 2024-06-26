import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Login() {
    const changepage = (path) => {
        window.location.href = "/" + path
    }
    return (
        <div style={{
            height: "100%", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: '124px',
            paddingBottom: "40px", paddingLeft: '20px', paddingRight: '20px', flexDirection: "column",
            maxWidth: "1024px", margin: "0 auto"
        }}>


            <svg width="80" height="92" viewBox="0 0 80 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M71.9842 92.0001H4.06284C2.07803 92.0001 0.469116 90.3912 0.469116 88.4064C0.469116 86.4216 2.07803 84.8127 4.06284 84.8127H71.9842C73.969 84.8127 75.5779 86.4216 75.5779 88.4064C75.5779 90.3912 73.969 92.0001 71.9842 92.0001Z" fill="#F7DBB3"></path>
                <path d="M59.4307 66.0549L60.0778 63.5839C60.088 63.5451 60.1146 63.5249 60.1238 63.5235C62.1241 63.1986 67.2742 62.1033 71.8868 58.9584C76.8878 55.5487 79.5311 50.8698 79.5311 45.4275C79.5311 42.6219 78.5693 39.9979 76.8233 38.039C75.502 36.5573 73.2306 36.4268 71.7493 37.7477C70.2678 39.0684 70.1373 41.34 71.458 42.8217C72.1901 43.6428 72.3439 44.692 72.3439 45.4275C72.3439 48.4692 70.8701 50.9528 67.8383 53.0199C64.3207 55.4182 60.1622 56.2356 58.9716 56.4291C56.1484 56.8875 53.8535 58.9814 53.125 61.7635L52.4688 64.2703C52.462 64.296 52.4557 64.3217 52.4496 64.3475C51.5952 67.9335 48.4239 70.438 44.7373 70.438H31.3767C27.6901 70.438 24.5188 67.9335 23.6644 64.3475L16.9215 36.0524C16.6651 34.976 16.9113 33.8605 17.5971 32.9921C18.2828 32.1237 19.311 31.6258 20.4175 31.6258H55.809C56.9155 31.6258 57.9437 32.1239 58.6293 32.9921C59.315 33.8605 59.5614 34.976 59.305 36.0524L56.8332 46.4255C56.373 48.3562 57.5652 50.2943 59.496 50.7543C61.4267 51.2148 63.365 50.0222 63.8248 48.0915L66.2965 37.7184C67.066 34.4891 66.3273 31.143 64.2701 28.5377C62.2126 25.9324 59.1287 24.4384 55.809 24.4384H20.4175C17.0978 24.4384 14.0138 25.9324 11.9564 28.5377C9.89919 31.143 9.16032 34.4893 9.92991 37.7184L16.6721 66.0134C18.301 72.8505 24.3476 77.6254 31.376 77.6254H44.7365C51.7511 77.6253 57.7873 72.8699 59.4307 66.0549ZM38.1557 17.2509C37.4341 17.2509 36.7062 17.0344 36.0737 16.5841C34.4572 15.4325 34.0801 13.1886 35.2315 11.5719C35.3275 11.4372 35.3936 11.3303 35.4385 11.2501C35.3598 11.1064 35.252 10.9256 35.1643 10.7788C34.2871 9.31004 32.4618 6.25394 35.0498 1.79144C36.0457 0.0743568 38.2447 -0.510162 39.9616 0.485658C41.6785 1.48148 42.2632 3.68048 41.2673 5.39738C40.9092 6.01496 40.8983 6.27874 40.8983 6.28125C40.9243 6.4056 41.1714 6.81941 41.3349 7.09325C42.21 8.55841 44.0309 11.6071 41.0857 15.7417C40.3849 16.726 39.2784 17.2509 38.1557 17.2509ZM26.711 15.7419C29.6562 11.6071 27.8353 8.55842 26.9602 7.09343C26.7967 6.81977 26.5496 6.40596 26.5236 6.28143C26.5236 6.27892 26.5345 6.01514 26.8926 5.39756C27.8885 3.68066 27.3038 1.48166 25.5869 0.485838C23.87 -0.509982 21.671 0.0745366 20.6751 1.79162C18.0871 6.25412 19.9124 9.31022 20.7896 10.779C20.8773 10.9258 20.9853 11.1064 21.0638 11.2503C21.0189 11.3304 20.9528 11.4373 20.8568 11.5721C19.7054 13.1887 20.0824 15.4327 21.699 16.5843C22.3315 17.0347 23.0594 17.2511 23.781 17.2511C24.9035 17.2509 26.01 16.726 26.711 15.7419ZM55.2811 15.7419C58.2263 11.6071 56.4054 8.55842 55.5303 7.09343C55.3668 6.81977 55.1197 6.40596 55.0937 6.28143C55.0937 6.27892 55.1046 6.01514 55.4627 5.39756C56.4586 3.68066 55.8739 1.48166 54.157 0.485838C52.4401 -0.509982 50.2411 0.0745366 49.2452 1.79162C46.6572 6.25412 48.4825 9.31022 49.3597 10.779C49.4474 10.9258 49.5554 11.1064 49.6339 11.2503C49.589 11.3304 49.5229 11.4373 49.4269 11.5721C48.2755 13.1887 48.6525 15.4327 50.2691 16.5843C50.9016 17.0347 51.6295 17.2511 52.3511 17.2511C53.4736 17.2509 54.5801 16.726 55.2811 15.7419Z" fill="#04764e" className="svg-primary"></path>
            </svg>
            <h2 style={{ margin: '17.5px 0 0', fontSize: '38px', fontWeight: '600', fontFamily: "Poppins, sans-serif" }}>Ombe</h2>
            <p style={{
                margin: '13.5px 0 0', marginBottom: '50px', fontSize: '14px',
                fontWeight: '400', height: "100%", color: '#777777', fontFamily: "Poppins, sans-serif"
            }}>Coffee Shop App</p>
            <h2 style={{
                marginTop: '25px', fontSize: '24px',
                fontWeight: '800', lineHeight: '1.3', textAlign: 'center', color: '#1b1b1b'
            }}>ยามเช้าเริ่มต้นด้วยกาแฟ Ombe</h2>
            <div style={{ marginBottom: '80px' }}>

            </div>

            <div style={{ width: '100%', boxSizing: 'border-box' }}>
                <div style={{
                    marginBottom: '40px', backgroundColor: "#03764D", border: 'none',
                    borderRadius: '50px', padding: '18px 25px', height: '60px', color: '#FFFFFF',
                    width: "100%", display: 'flex', justifyContent: "space-between",
                    fontSize: '16px'
                }} onClick={() => changepage("signin")}>
                    <div><FontAwesomeIcon icon={faEnvelope} style={{ width: '24px', height: "20px", alignItems: 'center', justifyContent: "center" }} /></div>
                    <div style={{ fontWeight: "600", color: "#FFFFFF" }}>เข้าสู่ระบบด้วย Email</div>
                    <div></div>
                </div>

                <div style={{
                    backgroundColor: "#386AED", border: 'none',
                    borderRadius: '50px', padding: '18px 25px', height: '60px', color: '#FFFFFF',
                    width: "100%", display: 'flex', justifyContent: "space-between",
                    fontSize: '16px'
                }} onClick={() => changepage("signin")}>
                    <div><FontAwesomeIcon icon={faFacebook} style={{ width: "24px", height: "24px", alignItems: 'center', justifyContent: "center"}} /></div>
                    <div style={{ fontWeight: "600", color: "#FFFFFF" }}>เข้าสู่ระบบด้วย Facebook</div>
                    <div></div>
                </div>

                <div style={{
                    marginTop: '15px', backgroundColor: "#FFFFFF", border: "0.5px solid #d9d9d9",
                    borderRadius: '50px', padding: '18px 25px', height: '60px', color: '#03764D',
                    width: "100%", display: 'flex', justifyContent: "space-between",
                    fontSize: '16px'
                }} onClick={() => changepage("signin")}>
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <img src='https://ombe.dexignzone.com/xhtml/img/social/google-mail.png' alt='google-logo'
                            style={{ width: "24px", height: "24px" }} />
                    </div>
                    <div style={{ fontWeight: "600", color: "#03764D" }}>เข้าสู่ระบบด้วย Google</div>
                    <div></div>
                </div>
            </div>
        </div>

    )
}

export default Login
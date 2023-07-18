import logoImage from "../logo_img.png";
import qrcode from "../qrcode.png";
import { Link } from "react-router-dom";
import "./Login.css"

export default function Login() {
    return(
        <div className = "page">
            <header className="head">
                <Link to="/" className="logo-link">
                    <img height={29} src = {logoImage} alt="로고사진"/>
                </Link>
            </header>
            <body className="main">
                <div className = "box">
                    <h1>당근채팅 로그인</h1>
                    <div className="sub-title">휴대전화의 카메라 또는 당근마켓 앱으로 QR코드를 촬영해주세요.</div>
                    <div className="first-wrapper">
                        <div className="ol-title">휴대전화로 QR 코드 촬영하기</div>
                        <ol className="ol-list">
                            <li>
                            휴대전화에서 카메라 앱을 열어요.
                            </li>
                            <li>
                            카메라로 코드를 스캔해요.
                            </li>
                            <li>
                            당근채팅 로그인하기 팝업을 클릭해요.
                            </li>
                        </ol>
                    </div>
                    <div className="second-wrapper">
                        <div className="ol-title">당근마켓 앱으로 QR 코드 촬영하기</div>
                        <ol className="ol-list">
                            <li>
                            휴대전화에서 당근마켓 앱을 열어요.
                            </li>
                            <li>
                            채팅 탭에서 QR 코드 스캐너를 선택해요.
                            </li>
                            <li>
                            스캐너로 코드를 스캔해요.
                            </li>
                            <li>
                            당근채팅 로그인하기 팝업을 선택해요.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="qrcode-wrapper" style={{borderRadius:"10%"}}>
                    <img src = {qrcode} height={220} style={{margin : 100}}/>
                </div>
            </body>
            <footer className="footer">
                <div className="footer-main">
                    <a class = "use-link" href="https://www.daangn.com/policy/terms" target="_blank" rel="noreferrer">이용약관</a>
                    <a class="privacy-policy footer-link" href="https://www.daangn.com/policy/privacy" target="_blank" rel="noreferrer">개인정보처리방침</a>
                    <a class="footer-link" href="https://www.daangn.com/policy/location" target="_blank" rel="noreferrer">위치기반서비스 이용약관</a>
                </div>
                <div className = "Inc">© Daangn Market Inc.</div>
            </footer>
        </div>
    )
}
import {Link, useMatch, useResolvedPath, useLocation} from "react-router-dom"
import logoImage from "./logo_img.png"

export default function Navbar() {
    const location = useLocation();
    const path = location.pathname;
    return <nav className="nav">
            <div className="navbar">
                <Link to="/" className="site-title">
                    <img height={26} src = {logoImage} alt="로고사진"/>
                </Link>
                <ul>
                    <li className = "trans">
                        <CustomLink to = "/">중고거래</CustomLink>
                    </li>
                    <li className="nearby-stores">
                        <CustomLink to = "/nearby-stores">동네가게</CustomLink>
                    </li>
                    <li className="jobs">
                        <CustomLink to = "/jobs">알바</CustomLink>
                    </li>
                    <li className="realty">
                        <CustomLink to = "/realty">부동산 직거래</CustomLink>
                    </li>
                    <li className = "car">
                        <CustomLink to ="/car">중고차 직거래</CustomLink>
                    </li>
                </ul>
            </div>
            <div className="searchAndChat">
                <input
                    className="searchbar"
                    placeholder=" 물품이나 동네를 검색해보세요"
                />
                <button className="btn">
                    <CustomLink to = "/login" className="chat-link">채팅하기</CustomLink>
                </button>
            </div>
        </nav>

}

function CustomLink({to, children, ...props}){

    const handleClick = (e) => {
        e.preventDefault(); // 브라우저의 기본 클릭 동작 처리를 방지
        e.currentTarget.classList.add("active"); // 클릭된 요소에 "active" 클래스를 추가
    };    

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedPath.pathname, end : true})
    return (
        <li className={isActive ? "active" : ""} onClick={handleClick}>
            <Link to = {to} {...props}>{children}</Link>
        </li>
    )

}
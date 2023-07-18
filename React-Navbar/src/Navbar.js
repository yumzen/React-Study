import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar(){
    const path = window.location.pathname
    return <nav className="nav">
        <Link to = "/" className="site-title">
            Site Name
        </Link>
        <ul>
            <CustomLink to = "/pricing">Pricing</CustomLink>
            <CustomLink to = "/about">About</CustomLink>
        </ul>
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
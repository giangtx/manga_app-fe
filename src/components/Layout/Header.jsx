import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="header-info">
                    <div className="logo">
                        <Link to="/manga-app">
                            <span>Manga-app</span>
                        </Link>
                    </div>
                    <div className="menu">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/manga-app" className="nav-link">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/manga-app/category" className="nav-link">Thể loại</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/new"className="nav-link">Mới nhất</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/new" className="nav-link">Không che</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/new" className="nav-link">Full color</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="user-login">
                        <Link to="/manga-app/login" className="nav-link">
                            <span>Đăng nhập</span>
                        </Link>
                    </div>
                    <div className="search">
                        <label className="search-lable">
                            <input className="search-input" type="text" placeholder="Tìm kiếm"></input>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
import React from 'react'
import "./css/leftside.css"
import { Link } from 'react-router-dom'
class Leftside extends React.Component{
    render(){
        return(
            <div className="leftside">
                <div className="leftside-logo">
                    <Link to="/manga-app">
                        <span>Manga-app</span>
                    </Link>
                </div>
                <div className="contribute-btn">
                    <Link to="/manga-app/user/upload-manga">
                        <p>Tạo bản thảo</p>
                    </Link>
                    
                </div>
                <div className="menu-leftside">
                    <ul>
                        <li className="item-leftside item-leftside-info item-leftside-ative">
                            <Link to="/manga-app/user/info"><i className="far fa-user"></i> Thông tin người dùng</Link>
                        </li>
                        <li className="item-leftside">
                            <Link to="/manga-app/user/list-manga"><i className="fas fa-home"></i> Bản thảo của tôi</Link>
                        </li>
                        <li className="item-leftside">
                            <i className="fas fa-chart-line"></i> Chi tiết
                        </li>
                        <li className="item-leftside">
                            <i className="fas fa-comment-dots"></i> Bình luận
                        </li>
                        <li className="item-leftside">
                            <i className="fas fa-question"></i> Các câu hỏi thưởng gặp
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Leftside
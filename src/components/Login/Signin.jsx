import React from 'react'
import './css/signin.css'
import { Link } from 'react-router-dom';
class Signin extends React.Component{
    render(){
        return(
            <div class="signin">
                <div class="signin-content">
                    <div className="logo-login" align="center">
                        <Link to="/manga-app">
                            <span>Manga-app</span>
                            <p className="tiny-title">Khám phá thế giới truyện tranh</p>
                        </Link>
                    </div>
                    <b style={{fontSize:"23px"}}>Đăng ký</b>
                    <p style={{fontSize:"14px",paddingBottom:"30px"}}>Hãy tạo tài khoản để tham gia cùng với chúng tôi</p>
                    <div className="login-input">
                        <p>Tài khoản</p>
                        <input type="text" className="input-text"></input>
                        <p>Email</p>
                        <input type="text" className="input-text"></input>
                        <p>Mật khẩu</p>
                        <input type="text" className="input-text"></input>
                        <p>Nhập lại mật khẩu</p>
                        <input type="text" className="input-text"></input>
                    </div>
                    <div className="btn-login btn-login-black">
                        <p>Đăng ký</p>
                    </div>
                    <p>Đã có tài khoản? <Link to="/manga-app/login">Đăng nhập</Link></p>
                </div>
            </div>
        )
    }
}
export default Signin;
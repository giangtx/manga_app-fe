import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <div className="login-content">
                    <div className="logo-login" align="center">
                        <Link to="/manga-app">
                            <span>Manga-app</span>
                            <p className="tiny-title">Khám phá thế giới truyện tranh</p>
                        </Link>
                    </div>
                    <b style={{fontSize:"23px",color:"rgb(65, 65, 65);"}}>Đăng nhập</b>
                    <p style={{fontSize:"14px",paddingBottom:"30px",color:"rgb(65, 65, 65);"}}>Chào mừng bạn quay trở lại</p>
                    <div className="btn-login fb-login">
                        <p className="fb-p">Log in with Facebook</p>
                    </div>
                    <div className="btn-login gg-login">
                        <p className="gg-p">Log in with Google</p>
                    </div>
                    <p style={{paddingBottom:"10px"}}>OR</p>
                    <div className="login-input">
                        <p>Tài khoản</p>
                        <input type="text" className="input-text"></input>
                        <p>Mật khẩu</p>
                        <input type="text" className="input-text"></input>
                    </div>
                    <div className="btn-login btn-login-black">
                        <p>Đăng nhập</p>
                    </div>
                    <p>Bạn chưa có tài khoản? <Link to="/manga-app/signin">Đăng ký</Link></p>
                </div>
            </div>
        )
    }
}
export default Login
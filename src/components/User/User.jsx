import React from 'react'
import "./css/user.css"
import Leftside from './Leftside';
class User extends React.Component{
    render(){
        return(
            <div className="user-info">
                <div className="container-fluid" style={{padding:'0px'}}>
                    <Leftside></Leftside>
                    <div className="right-side">
                        <div className="top-bar">
                            <div className="topbar-title">
                                <p className="topbar-p">Thông tin người dùng</p>
                            </div>
                            <div className="topbar-userinfo">
                                <div style={{float:"right"}}>
                                    <span style={{fontSize:"20px"}}>Slytherin</span>
                                    <span> /Đăng xuất</span> 
                                </div>
                                <div className="topbar-user-image">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/slytherin-b4041.appspot.com/o/DSC02249.jpg?alt=media&token=3f126842-44ea-4342-b395-6f492b19505b" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="box-info">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="avatar-box">
                                        <div className="avatar-box-image">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/slytherin-b4041.appspot.com/o/DSC02249.jpg?alt=media&token=3f126842-44ea-4342-b395-6f492b19505b" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="info-detail">
                                        <div className="info-box-item">
                                            <label>Tên người dùng</label>
                                            <input type="text" value="Slytherin"/> <br />
                                        </div>
                                        <div className="info-box-item">
                                            <label>Gmail</label>
                                            <input type="text" value="Slytherin"/> <br />
                                        </div>
                                        <div className="info-box-item">
                                            <label>Số điện thoại</label>
                                            <input type="text" value="Slytherin"/> <br />
                                        </div>
                                        <div className="info-box-item">
                                            <label>Ngày sinh</label>
                                            <input type="text" value="Slytherin"/> <br />
                                        </div>
                                        <div className="info-box-item">
                                            <label>Quê quán</label>
                                            <input type="text" value="Slytherin"/> <br />
                                        </div>
                                        <div className="info-box-item">
                                            <label>Ngày sinh</label>
                                            <input type="text" value="Slytherin"/> <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div align="center">
                            <div className="btn-info-box" style={{align:"center"}}>
                                <p>Cập nhật</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default User;
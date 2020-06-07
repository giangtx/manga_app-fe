import React from 'react'
import Leftside from './Leftside';
import "./css/uploadmanga.css"
class UploadManga extends React.Component{
    render(){
        return(
            <div className="upload-manga">
                <div className="container-fluid" style={{padding:'0px'}}>
                    <Leftside></Leftside>
                    <div className="right-side">
                        <div className="top-bar">
                            <div className="topbar-title">
                                <p className="topbar-p">Tạo bản thảo</p>
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
                        <div className="upload-content">
                            <div className="upload-page">
                                <div className="upload-title">
                                    <div className="nav-upload">
                                        <div className="nav-num nav-num-selected">
                                            <span>1</span>
                                        </div>
                                        <div className="nav-item nav-item-selected">
                                            <span>Tạo tác phẩm</span>
                                        </div>
                                        <div className="nav-dividing-line"></div>
                                        <div className="nav-num">
                                            <span>2</span>
                                        </div>
                                        <div className="nav-item">
                                            <span>Thêm Chapter</span>
                                        </div>
                                        <div className="nav-dividing-line"></div>
                                        <div className="nav-num">
                                            <span>3</span>
                                        </div>
                                        <div className="nav-item">
                                            <span>Chờ phê duyệt</span>
                                        </div>
                                        <div className="nav-dividing-line"></div>
                                    </div>
                                </div>
                                <div className="upload-form">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 upload-form-lable">
                                            <span>Tiêu đề</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input">
                                            <input className="" type="text"></input>
                                            <span className="text-count">
                                                <span>0</span><span>/100</span>
                                            </span>
                                        </div>
                                        <div className="col-lg-2 col-md-2 upload-form-lable">
                                            <span>Ngôn ngữ</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input">
                                            <select>
                                                <option>Tiếng Việt</option>
                                                <option>Tiếng Anh</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-2 col-md-2 upload-form-lable">
                                            <span>Thể loại</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Trường học"/>
                                                <label class="form-check-label">Trường học</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Kinh dị"/>
                                                <label class="form-check-label" >Kinh dị</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Hành động"/>
                                                <label class="form-check-label">Hành động</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Tình yêu"/>
                                                <label class="form-check-label" >Tình yêu</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Đam mỹ"/>
                                                <label class="form-check-label">Đam mỹ</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Huyền huyễn"/>
                                                <label class="form-check-label" >Huyền huyễn</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Xuyên không"/>
                                                <label class="form-check-label">Xuyên không</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Hài hước"/>
                                                <label class="form-check-label" >Hài hước</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Viễn tưởng"/>
                                                <label class="form-check-label">Viễn tưởng</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Fanfic"/>
                                                <label class="form-check-label" >Fanfic</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Tổng tài"/>
                                                <label class="form-check-label" >Tổng tài</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Mạo hiểm"/>
                                                <label class="form-check-label">Mạo hiểm</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Bách hợp"/>
                                                <label class="form-check-label" >Bách hợp</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="Siêu năng lực"/>
                                                <label class="form-check-label" >Siêu năng lực</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 upload-form-lable" style={{lineHeight:"20px",paddingTop:"12px"}}>
                                            <span>Tình trạng cập nhật</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input">
                                            <select>
                                                <option>Tiếp tục cập nhật</option>
                                                <option>Đã hoàn thành</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-2 col-md-2 upload-form-lable" style={{lineHeight:"20px",paddingTop:"30px"}}>
                                            <span>Hình ảnh</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input" style={{paddingTop:"30px"}}>
                                            <div className="upload-image-cover">
                                                <div className="upload-btn">
                                                    <div style={{paddingTop:"40px"}}>
                                                        <i class="fas fa-cloud-upload-alt" style={{fontSize:"50px"}}></i>
                                                        <br></br>
                                                        <span>Chọn ảnh...</span>
                                                        <br></br>
                                                        <span>JPG 450*600px</span>
                                                    </div>
                                                    <input type="file" className="upload-image"></input>
                                                </div>
                                            </div>
                                            <div className="upload-big-image-cover">
                                                <div className="upload-btn">
                                                    <div style={{paddingTop:"40px"}}>
                                                        <i class="fas fa-cloud-upload-alt" style={{fontSize:"50px"}}></i>
                                                        <br></br>
                                                        <span>Chọn ảnh...</span>
                                                        <br></br>
                                                        <span>JPG 750*450px</span>
                                                    </div>
                                                    <input type="file" className="upload-big-image"></input>
                                                </div>
                                            </div>
                                            <div className="upload-p">
                                                <p>Vui lòng xác nhận bạn có bản quyền của ảnh bìa. Nếu không có vui lòng không tải lên, chúng tôi sẽ sử dụng ảnh bìa mặc định</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 upload-form-lable" style={{lineHeight:"25px"}}>
                                            <span>Giới thiệu</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input">
                                            <textarea rows="7"></textarea>
                                            <span className="text-count">
                                                <span>0</span><span>/100</span>
                                            </span>
                                        </div>
                                        <div className="col-lg-2 col-md-2 upload-form-lable" >
                                            
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input" style={{lineHeight:"25px",paddingTop:"20px"}}>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value=""/>
                                                <label class="form-check-label">Tôi xác nhận truyện tiểu thuyết là do tôi sáng tác và thuộc sở hữu của tôi</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value=""/>
                                                <label class="form-check-label" >Tôi đồng ý với “Đăng ký tác giả và thỏa thuận đăng tải truyện” của MangaToon</label>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div align="center">
                                        <div className="btn-upload-manga" style={{align:"center"}}>
                                            <p>Tạo tác phẩm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default UploadManga;
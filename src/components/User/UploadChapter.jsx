import React from 'react'
import Leftside from './Leftside'
import './css/uploadchapter.css'
class UploadChapter extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			value: '',
			rows: 10,
			minRows: 10,
			maxRows: 100,
		};
    }
    handleChange = (event) => {
		const textareaLineHeight = 24;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	    event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
            
            if (currentRows >= maxRows) {
                event.target.rows = maxRows;
                event.target.scrollTop = event.target.scrollHeight;
            }
        
        this.setState({
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
	};
    render(){
        return(
            <div className="upload-manga">
                <div className="container-fluid" style={{padding:'0px'}}>
                    <Leftside></Leftside>
                    <div className="right-side">
                        <div className="top-bar">
                            <div className="topbar-title">
                                <p className="topbar-p">Tạo Chapter</p>
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
                                        <div className="nav-num nav-num-selected">
                                            <span>2</span>
                                        </div>
                                        <div className="nav-item nav-item-selected">
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
                                            <span>Nội dung</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-chapter-form-input" style={{paddingTop:"20px"}}>
                                            <div className="title-upload-img">
                                                <div className="icon-img-upload-chap">
                                                    <i className="fas fa-image"></i>
                                                    <input type="file" className="input-file-upload-chap"></input>
                                                </div>
                                            </div>
                                            <textarea rows={this.state.rows}
                                                value={this.state.value}
                                                placeholder={'Enter your text here...'}
                                                onChange={this.handleChange}>
                                            </textarea>
                                        </div>
                                        <div className="col-lg-2 col-md-2 upload-form-lable" style={{lineHeight:"20px",paddingTop:"12px"}}>
                                            <span>Gồm nội dung người lớn</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input">
                                            <select>
                                                <option>Không </option>
                                                <option>Có</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-2 col-md-2 upload-form-lable" style={{lineHeight:"20px",paddingTop:"12px"}}>
                                            <span>Thời gian lên sóng</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input">
                                            <input className="" type="text" style={{width:"300px"}}></input>
                                        </div>  
                                        <div className="col-lg-2 col-md-2 upload-form-lable" style={{lineHeight:"20px",paddingTop:"12px"}}>
                                            <span>Có phải nội dung chính không</span>
                                        </div>
                                        <div className="col-lg-10 col-md-10 upload-form-input">
                                            <select>
                                                <option>Nội dung chính</option>
                                                <option>Không phải nội dung chính</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div align="center">
                                        <div className="btn-upload-manga" style={{align:"center"}}>
                                            <p>Nộp chờ xét duyệt</p>
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
export default UploadChapter
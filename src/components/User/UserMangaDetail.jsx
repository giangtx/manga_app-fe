import React from 'react';
import Leftside from './Leftside';
import './css/usermangadetail.css'
import { Link } from 'react-router-dom';
class UserMangaDetail extends React.Component{
    render(){
        return(
            <div className="userManga-detail-page">
                <div className="container-fluid" style={{padding:'0px'}}>
                    <Leftside></Leftside>
                    <div className="right-side">
                        <div className="top-bar">
                            <div className="topbar-title">
                                <p className="topbar-p">Nội dung manga</p>
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
                        <div className="user-manga-content">
                            <div className="user-manga-page">
                                <div className="user-manga-page-detail">
                                    <div className="manga-detail-leftside">
                                        <div className="image-manga-detail-leftside">
                                            <img src={mangadetail.image}></img>
                                        </div>
                                        <Link to="/manga-app/user/upload-manga">
                                            <div className="btn-create-manga edit-manga">
                                                <span>Sửa truyện tranh</span>
                                            </div>
                                        </Link> 
                                        <br></br>
                                        <Link to="/manga-app/user/upload-chapter">
                                            <div className="btn-create-manga">
                                                <span>Thêm chapter</span>
                                            </div>
                                        </Link> 
                                    </div>
                                    <div className="manga-detail-rightside">
                                        <h3>{mangadetail.name}</h3>
                                        <div style={{paddingTop:"10px"}}>
                                            <span>Tác giả: {mangadetail.author}t</span><br/>
                                        </div>
                                        <div style={{paddingTop:"10px"}}>
                                            <span>Trạng thái: {mangadetail.status}t</span><br/>
                                        </div>
                                        <div style={{paddingTop:"10px"}}>
                                            <span>Thời gian tạo: {mangadetail.timeCreate}</span><br/>
                                        </div>
                                        <div style={{paddingTop:"10px"}}>
                                            <span>Thời gian cập nhật mới : {mangadetail.timeUpdate}</span><br/>
                                        </div>
                                        <div style={{paddingTop:"10px"}}>
                                            <span>Thể loại: {mangadetail.category.map((cate)=>{
                                                return cate.name+" "
                                            })}</span><br/>
                                        </div>
                                        <div style={{paddingTop:"10px"}}>
                                            <span>Nội dung: {mangadetail.summary}</span>
                                        </div>
                                        <ul>
                                            <li className="row chap-border">
                                                <p className="col-lg-6">Số chương</p>
                                                <p className="col-lg-3">Cập nhật</p>
                                                <p className="col-lg-3">Lượt xem</p>
                                            </li>
                                            {mangadetail.listchap.map((chap,index)=>{
                                                return(
                                                    <li className="row chap-border" key={index}>
                                                        <p className="col-lg-6">{chap.name}</p>
                                                        <p className="col-lg-3">{chap.timeUpdate}</p>
                                                        <p className="col-lg-3">{chap.view}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
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
const mangadetail={
    id:1,
    name:"Tên truyện gì gì đó",
    image:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/15615b22.jpg-posterup4",
    author:"J.R.R Tolkien",
    status:"Đang chờ duyệt",
    timeCreate:"2/3/2003",
    timeUpdate:"2/2/1998",
    category:[{name:"Không che"},{name:"Full color"},{name:"Mèo"},{name:"học sinh"},{name:"Trẻ con"}],
    summary:"Yoshida, 26 tuổi một nhân viên văn phòng. vừa thất tình và say rượu. anh đang từ quan bar về "+
            "này cô nhóc kia"+
            "đang làm gì ở đây giờ này hả, về nhà đi"+
            "chú ơi.. cho tôi ở lại nhà chú đêm nay nhé....",
    listchap:[
        {
            id:1,
            name:"Chap 1",
            timeUpdate:"20/11/1998",
            view:"10000"
        },
        {
            id:1,
            name:"Chap 2",
            timeUpdate:"21/11/1998",
            view:"19999"
        },
        {
            id:1,
            name:"Chap 3",
            timeUpdate:"22/11/1998",
            view:"106666"
        },
        {
            id:1,
            name:"Chap 4",
            timeUpdate:"23/11/1998",
            view:"13333"
        }
    ]
}
export default UserMangaDetail
import React from 'react';
import Leftside from './Leftside';
import './css/usermanga.css'
import { Link } from 'react-router-dom';
class UserManga extends React.Component{
    render(){
        const list=mangas.map((manga,index)=>{
            return(
                <div className="user-manga-detail" key={index}>
                    <div className="user-manga-image">
                        <img src={manga.image}></img>
                    </div>
                    <div className="user-manga-info">
                        <Link to={"/manga-app/user/manga-detail/"+manga.id} className="title-manga-user">{manga.name}</Link>
                        <span>Kiểm duyệt</span>
                        <div className="user-manga-update-time">
                            <span>Thời gian cập nhật mới : {manga.timeUpdate}</span>
                            <span>Thời gian tạo: {manga.timeCreate}</span>
                        </div>
                        <ul className="user-manga-count">
                            <li><i class="fas fa-eye"></i> {manga.views}</li>
                            <li><i class="fas fa-thumbs-up"></i> {manga.likes}</li>
                            <li><i class="fas fa-comment-alt"></i> {manga.comments}</li>
                        </ul>
                    </div>
                </div>
            )
        })
        return(
            <div className="user-manga">
                <div className="container-fluid" style={{padding:'0px'}}>
                    <Leftside></Leftside>
                    <div className="right-side">
                        <div className="top-bar">
                            <div className="topbar-title">
                                <p className="topbar-p">Bản thảo của tôi</p>
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
                                <div className="user-manga-page-title">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8">
                                            <div className="title-top-usermanga">
                                                <span>Truyện tranh của tôi</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div align="right">
                                                <Link to="/manga-app/user/upload-manga">
                                                    <div className="btn-create-manga">
                                                        <span>Tạo Manga</span>
                                                    </div>
                                                </Link> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-manga-page-content">
                                    {list}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mangas=[
    {
        id:1,
        name:"Tên truyện",
        image:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg",
        status:"Kiểm duyệt",
        timeUpdate:"2/2/1998",
        timeCreate:"2/3/2003",
        views:30,
        likes:100,
        comments:10
    },
    {
        id:1,
        name:"Tên truyện 2",
        image:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/15615b22.jpg-posterup4",
        status:"Tiếp tục cập nhật",
        timeUpdate:"2/2/1998",
        timeCreate:"2/3/2003",
        views:3,
        likes:10,
        comments:110
    },
    {
        id:3,
        name:"Đã hoàn thành",
        image:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/3842725b1.jpg-posterup4",
        status:"Kiểm duyệt",
        timeUpdate:"2/2/1998",
        timeCreate:"2/3/2003",
        views:30,
        likes:100,
        comments:10
    },
]
export default UserManga;
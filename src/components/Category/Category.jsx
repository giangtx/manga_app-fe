import React from 'react'
import './css/category.css'
import MangaDetail from '../Home/MangaDetail'
import { Link } from 'react-router-dom'
class Category extends React.Component{
    render(){
        return(
            <div className="category">
                <div className="category-content">
                    <div className="container-fluid" style={{padding:'0px'}}>
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="category-name">
                                    <span className="category-title">Thể loại</span>
                                    <div className="category-name-list">
                                        <ul>
                                            <li className="li-ative">Không che</li>
                                            <li>Full màu</li>
                                            <li>Thần thoại</li>
                                            <li>Hài hước</li>
                                            <li>Hành động</li>
                                            <li>Rau cải</li>
                                            <li>Rau răm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="category-list-title">
                                    <div style={{paddingBottom:"30px"}}>
                                        <h2>Thể loại Không che</h2>
                                        <span>Mô tả: Thể loại mà hình không bị che xem rất bổ ích </span>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <h4>Lọc theo</h4>
                                        </div>
                                        <div className="col-lg-10">
                                            <div className="filter">
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <Link className="filter-link">Ngày đăng</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="filter-link">Số chap</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="filter-link">Theo dõi</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="filter-link">Lượt xem</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="filter-link">Lươt thích</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="category-list">
                                    <div className="row">
                                        <MangaDetail></MangaDetail>
                                        <MangaDetail></MangaDetail>
                                        <MangaDetail></MangaDetail>
                                        <MangaDetail></MangaDetail>
                                        <MangaDetail></MangaDetail>
                                        <MangaDetail></MangaDetail>
                                        <MangaDetail></MangaDetail>
                                        <MangaDetail></MangaDetail>
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
export default Category
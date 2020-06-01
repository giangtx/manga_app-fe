import React from 'react'
import { Link } from 'react-router-dom';
class CategoryTitle extends React.Component{
    render(){
        return(
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
        )
    }
}
export default CategoryTitle;
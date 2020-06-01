import React from 'react';
import './css/listchap.css'
import { Link } from 'react-router-dom';
class ListChap extends React.Component{
    render(){
        return(
            <div className="list-chap">
                <div className="list-chap-title">
                    <span>DANH SÁCH CHƯƠNG</span>
                </div>
                <div className="list-chap-content">
                    <ul>
                        <li className="row chap-border">
                            <p className="col-lg-6">Số chương</p>
                            <p className="col-lg-3">Cập nhật</p>
                            <p className="col-lg-3">Lượt xem</p>
                        </li>
                        <li className="row chap-border">
                            <p className="col-lg-6"><Link to="/manga-app/manga/chap">Chap 1</Link></p>
                            <p className="col-lg-3">20/10/1998</p>
                            <p className="col-lg-3">100</p>
                        </li>
                        <li className="row chap-border">
                            <p className="col-lg-6"><Link>Chap 1</Link></p>
                            <p className="col-lg-3">20/10/1998</p>
                            <p className="col-lg-3">100</p>
                        </li>
                        <li className="row chap-border">
                            <p className="col-lg-6"><Link>Chap 1</Link></p>
                            <p className="col-lg-3">20/10/1998</p>
                            <p className="col-lg-3">100</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default ListChap;
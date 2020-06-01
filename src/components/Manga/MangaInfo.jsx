import React from 'react';
import './css/mangaInfo.css'
import { Link } from 'react-router-dom';
import ListChap from './ListChap';
import MangaComment from './MangaComment';
class MangaInfo extends React.Component{
    render(){
        return(
            <div className="manga-info">
                <div className="manga-info-title">
                    <h3>Tên truyện gì gì đó</h3>
                    <span>[Cập nhật lúc hôm qua]</span>
                </div>
                <div className="manga-detail">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="manga-info-img">
                                <img src="http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg"></img>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="manga-info-detail">
                                <ul >
                                    <li className="row">
                                        <p className="col-lg-4">Tác giả</p>
                                        <p className="col-lg-8">Chưa cập nhật</p>
                                    </li>
                                    <li className="row">
                                        <p className="col-lg-4">Tình trạng</p>
                                        <p className="col-lg-8">Chưa cập nhật</p>
                                    </li>
                                    <li className="row">
                                        <p className="col-lg-4">Thể loại</p>
                                        <p className="col-lg-8">Không che - Full color - Mèo - Học sinh - Trẻ con</p>
                                    </li>
                                    <li className="row">
                                        <p className="col-lg-4">Lượt xem</p>
                                        <p className="col-lg-8">Chưa cập nhật</p>
                                    </li>
                                </ul>
                                <div className="manga-info-follow">
                                    <Link className="btn btn-success">Theo dõi</Link>
                                </div>
                                <div>
                                    <Link className="btn btn-primary">Đọc từ đầu</Link>
                                    <Link className="btn btn-primary" style={{marginLeft:'5px'}}>Đọc tập mới nhât</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <div className="summary-title">
                            <span>NỘI DUNG</span>
                        </div>
                        <div>
                            <span>
                            Yoshida, 26 tuổi một nhân viên văn phòng. vừa thất tình và say rượu. anh đang từ quan bar về
                            "này cô nhóc kia"
                            "đang làm gì ở đây giờ này hả, về nhà đi"
                            "chú ơi.. cho tôi ở lại nhà chú đêm nay nhé"....
                            </span>
                        </div>
                    </div>
                    <ListChap></ListChap>
                    <MangaComment></MangaComment>
                </div>
            </div>
        )
    }
}
export default MangaInfo
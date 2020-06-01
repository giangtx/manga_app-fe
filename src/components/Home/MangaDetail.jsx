import React from 'react'
import './css/newmanga.css'
import { Link } from 'react-router-dom';
class MangaDetail extends React.Component{
    render(){
        return(
            <div className="col-lg-2">
                <Link>
                    <div className="manga-new-detail">
                        <div className="manga-new-image">
                            <img src="http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg"></img>
                        </div>
                        <div className="manga-new-title">
                            <span>Cắn tai con mèo</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
        
    }
}
export default MangaDetail;
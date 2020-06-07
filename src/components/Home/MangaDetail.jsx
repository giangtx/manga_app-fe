import React from 'react'
import './css/newmanga.css'
import { Link } from 'react-router-dom';
class MangaDetail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {id,name,url}=this.props.manga;
        return(
            <div className="col-lg-2 col-md-2 col-sm-3" key={this.props.index}>
                <Link to={"/manga-app/manga/"+id}>
                    <div className="manga-new-detail">
                        <div className="manga-new-image">
                            <img src={url}></img>
                        </div>
                        <div className="manga-new-title">
                            <span>{name}</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
        
    }
}
export default MangaDetail;
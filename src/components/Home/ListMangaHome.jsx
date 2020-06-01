import React from 'react'
import './css/newmanga.css'
import { Link } from 'react-router-dom'
import MangaDetail from './MangaDetail'
class ListMangaHome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="new-manga">
                <div className="new-manga-content">
                    <div className="container-fluid" style={{padding:'0px'}}>
                        <h2>{this.props.title}</h2>
                        <Link>
                            <span className="see-all">Xem tất cả</span>
                        </Link>
                        <div className="list-new-manga">
                            <div className="row">
                                <MangaDetail></MangaDetail>
                                <MangaDetail></MangaDetail>
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
        )
    }
}
export default ListMangaHome;
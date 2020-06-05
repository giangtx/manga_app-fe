import React from 'react'
import './css/newmanga.css'
import { Link } from 'react-router-dom'
import MangaDetail from './MangaDetail'
class ListMangaHome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const list=mangas.map((manga,index)=>{
            return(
                <MangaDetail manga={manga} index={index}></MangaDetail>
            )
        })
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
                                {list}
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
        name:"Cắn tai con mèo",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg"
    },
    {
        id:2,
        name:"How to get lucky",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/15615b22.jpg-posterup4"
    },
    {
        id:3,
        name:"Tóc đen ôm tóc vàng",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/3842725b1.jpg-posterup4"
    },
    {
        id:4,
        name:"Tóc đen ôm tóc vàng phần 2",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/5998127aa.jpg-posterup4"
    },
    {
        id:5,
        name:"Suỵt",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/59979bb91.jpg-posterup4"
    },
    {
        id:1,
        name:"Cắn tai con mèo",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg"
    },
    {
        id:4,
        name:"Tóc đen ôm tóc vàng phần 2",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/5998127aa.jpg-posterup4"
    },
    {
        id:5,
        name:"Suỵt",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/59979bb91.jpg-posterup4"
    },
    {
        id:1,
        name:"Cắn tai con mèo",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg"
    },
    {
        id:2,
        name:"How to get lucky",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/15615b22.jpg-posterup4"
    },
    {
        id:3,
        name:"Tóc đen ôm tóc vàng",
        url:"http://cn.e.pic.mangatoon.mobi/cartoon-posters/3842725b1.jpg-posterup4"
    },
]
export default ListMangaHome;
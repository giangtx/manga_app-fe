import React from 'react'
import './css/category.css'
import MangaDetail from '../Home/MangaDetail'
import { Link } from 'react-router-dom'
import CategoryName from './CategoryName'
import CategoryTitle from './CategoryTitle'
class Category extends React.Component{
    render(){
        return(
            <div className="category">
                <div className="category-content">
                    <div className="container-fluid" style={{padding:'0px'}}>
                        <div className="row">
                            <div className="col-lg-2">
                                <CategoryName></CategoryName>
                            </div>
                            <div className="col-lg-10">
                                <CategoryTitle></CategoryTitle>
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
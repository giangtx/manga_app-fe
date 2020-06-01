import React from 'react'
import Banner from './Banner'
import './css/home.css'
import NewManga from './ListMangaHome'
import ListMangaHome from './ListMangaHome'
import Layout from '../Layout/Layout'
class Home extends React.Component{
    render(){
        return(
            <Layout>
                <div className="home-content">
                    <Banner></Banner>
                    <ListMangaHome title="Truyện mới cập nhật"></ListMangaHome>
                    <ListMangaHome title="Truyện hot"></ListMangaHome>
                </div>
            </Layout>
            
        )
    }
}
export default Home;
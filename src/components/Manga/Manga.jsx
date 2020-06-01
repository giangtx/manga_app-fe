import React from 'react';
import './css/manga.css'
import MangaInfo from './MangaInfo';
class Manga extends React.Component{
    render(){
        return(
            <div className="manga">
                <div className="manga-content">
                    <div className="container-fluid" style={{padding:'0px'}}>
                        <div className="row">
                            <MangaInfo></MangaInfo>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Manga
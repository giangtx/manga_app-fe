import React from 'react';
import './css/manga.css'
import MangaInfo from './MangaInfo';
class Manga extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.match.params.idmanga)
        return(
            <div className="manga">
                <div className="manga-content">
                    <div className="container-fluid" style={{padding:'0px'}}>
                        <div className="row">
                            <MangaInfo idmanga={this.props.match.params.idmanga}></MangaInfo>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Manga
import React from 'react';
import './css/chap.css'
class Chap extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("manga: "+this.props.match.params.idmanga+" chap: "+this.props.match.params.idchap)
        const list=images.map((image,index)=>{
            return(
                <div align="center" key={index}>
                    <img src={image.url} alt=""/>
                </div>
            )
        })
        return(
            <div className="chap">
                <div className="chap-content">
                    <div className="chap-title">
                        <h3>Tên truyện gì gì đó</h3>
                        <span>[Cập nhật lúc hôm qua]</span>
                    </div>
                    <div className="chap-content">
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}
const images=[
    {
        url:"/image/0.jpg"
    },
    {
        url:"/image/1.jpg"
    },
    {
        url:"/image/2.jpg"
    },
    {
        url:"/image/3.jpg"
    }

]
export default Chap
import React from 'react'
import './css/banner.css'
import { Link } from 'react-router-dom'
class Banner extends React.Component{
    constructor(props){
        super();
        this.state={
            bannerIndex:1
        }
    }
    changeBannerLeft = () =>{
        if(this.state.bannerIndex===1){
            this.setState({
                bannerIndex:5
            })
        }else{
            this.setState({
                bannerIndex:this.state.bannerIndex-1
            })
        }
    }
    changeBannerRight = () =>{
        if(this.state.bannerIndex===5){
            this.setState({
                bannerIndex:1
            })
        }else{
            this.setState({
                bannerIndex:this.state.bannerIndex+1
            })
        }
    }
    render(){
        let {bannerIndex}=this.state;
        if(3+bannerIndex>5){
            console.log(bannerIndex-2)
        }else{
            console.log(3+bannerIndex)
        }
        return(
            <div className="banner">
                <div className="banner-content">
                    <div className="slide">
                        <Link>
                            <div className={"img "+"img"+bannerIndex} data-slide-imgid={bannerIndex}>
                                <img src="http://cn.e.pic.mangatoon.mobi/homepage-banners/339-166a.jpg" alt="description of image1"/>
                            </div>
                        </Link>
                        <Link>
                            <div className={"img "+"img"+(bannerIndex >= 5 ? 1 : bannerIndex+1)} data-slide-imgid="1">
                                <img src="http://cn.e.pic.mangatoon.mobi/homepage-banners/337-c4f1.jpg" alt="description of image2"></img>
                            </div>
                        </Link>
                        <Link>
                            <div className={"img "+"img"+(bannerIndex+2 > 5 ? bannerIndex-3 : bannerIndex+2)} data-slide-imgid="2">
                                <img src="http://cn.e.pic.mangatoon.mobi/homepage-banners/341-8bd6.jpg" alt="description of image3"></img>
                            </div>
                        </Link>
                        <Link>
                            <div className={"img "+"img"+(bannerIndex+3 >5 ? bannerIndex-2 : bannerIndex+3)} data-slide-imgid="3">
                                <img src="http://cn.e.pic.mangatoon.mobi/homepage-banners/342-3bd9.jpg" alt="description of image4"></img>
                            </div>
                        </Link>
                        <Link>
                            <div className={"img "+"img"+(bannerIndex+4 > 5 ? bannerIndex-1 : bannerIndex+4)} data-slide-imgid="4">
                                <img src="http://cn.e.pic.mangatoon.mobi/homepage-banners/328-0471.jpg" alt="description of image5"></img>
                            </div>
                        </Link>
                        <div className="side-bt">

                        </div>
                    </div>
                    <div className="change-banner-left" onClick={this.changeBannerLeft}>
                        <span className="iconfont arrow">&#10096;</span>
                    </div>
                    <div className="change-banner-right" onClick={this.changeBannerRight}>
                        <span className="iconfont arrow">&#10097;</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Banner;
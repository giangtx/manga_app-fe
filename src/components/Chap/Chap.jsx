import React from 'react';
import './css/chap.css'
class Chap extends React.Component{
    render(){
        return(
            <div className="chap">
                <div className="chap-content">
                    <div className="chap-title">
                        <h3>Tên truyện gì gì đó</h3>
                        <span>[Cập nhật lúc hôm qua]</span>
                    </div>
                    <div className="chap-content">
                        <div align="center">
                            <img src="http://mangaqq.net/1742/58/4.jpg?c=c784563" alt=""/>
                        </div>
                        <div align="center">
                            <img src="http://mangaqq.net/1742/58/5.jpg?c=c784563" alt=""/>
                        </div>
                        <div align="center">
                            <img src="http://mangaqq.net/1742/58/6.jpg?c=c784563" alt=""/>
                        </div>
                        <div align="center">
                            <img src="http://mangaqq.net/1742/58/7.jpg?c=c784563" alt=""/>
                        </div>
                        <div align="center">
                            <img src="http://mangaqq.net/1742/58/8.jpg?c=c784563" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Chap
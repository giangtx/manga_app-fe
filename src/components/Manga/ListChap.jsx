import React from 'react';
import './css/listchap.css'
import { Link } from 'react-router-dom';
class ListChap extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const list=listchap.map((chap,index)=>{
            return(
                <li className="row chap-border" key={index}>
                    <p className="col-lg-6"><Link to={"/manga-app/manga/"+this.props.id+"/chap/"+chap.id}>{chap.name}</Link></p>
                    <p className="col-lg-3">{chap.timeUpdate}</p>
                    <p className="col-lg-3">{chap.view}</p>
                </li>
            )
        })
        return(
            <div className="list-chap">
                <div className="list-chap-title">
                    <span>DANH SÁCH CHƯƠNG</span>
                </div>
                <div className="list-chap-content">
                    <ul>
                        <li className="row chap-border">
                            <p className="col-lg-6">Số chương</p>
                            <p className="col-lg-3">Cập nhật</p>
                            <p className="col-lg-3">Lượt xem</p>
                        </li>
                        {list}
                    </ul>
                </div>
            </div>
        )
    }

}
const listchap=[
    {
        id:1,
        name:"Chap 1",
        timeUpdate:"20/11/1998",
        view:"10000"
    },
    {
        id:1,
        name:"Chap 2",
        timeUpdate:"21/11/1998",
        view:"19999"
    },
    {
        id:1,
        name:"Chap 3",
        timeUpdate:"22/11/1998",
        view:"106666"
    },
    {
        id:1,
        name:"Chap 4",
        timeUpdate:"23/11/1998",
        view:"13333"
    }


]
export default ListChap;
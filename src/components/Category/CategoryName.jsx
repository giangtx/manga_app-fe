import React from 'react'
import { Link } from 'react-router-dom'
class CategoryName extends React.Component{
    render(){
        const list=listname.map((name,index)=>{
            return(
                <li key={index}><Link to={"/manga-app/category/"+name.id}>{name.name}</Link></li>
            )
        })
        return(
            <div className="category-name">
                <span className="category-title">Thể loại</span>
                <div className="category-name-list">
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        )
    }
}
const listname=[
    {
        id:1,
        name:"Không che"
    },
    {
        id:2,
        name:"Full màu"
    },
    {
        id:3,
        name:"Thần thoại"
    },
    {
        id:4,
        name:"Hài hước"
    },
    {
        id:5,
        name:"Hành động"
    },
    {
        id:6,
        name:"Rau cải"
    },
    {
        id:7,
        name:"Rau răm"
    },

]
export default CategoryName
import React from 'react'
class CategoryName extends React.Component{
    render(){
        return(
            <div className="category-name">
                <span className="category-title">Thể loại</span>
                <div className="category-name-list">
                    <ul>
                        <li className="li-ative">Không che</li>
                        <li>Full màu</li>
                        <li>Thần thoại</li>
                        <li>Hài hước</li>
                        <li>Hành động</li>
                        <li>Rau cải</li>
                        <li>Rau răm</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default CategoryName
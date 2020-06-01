import React from 'react';
import './css/mangaComment.css'
import { Link } from 'react-router-dom';
class MangaComment extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			value: '',
			rows: 3,
			minRows: 3,
			maxRows: 10,
		};
    }
    handleChange = (event) => {
		const textareaLineHeight = 24;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	    event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
            
            if (currentRows >= maxRows) {
                event.target.rows = maxRows;
                event.target.scrollTop = event.target.scrollHeight;
            }
        
        this.setState({
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
	};
    render(){
        return(
            <div className="manga-comment">
                <div className="row">
                    <div className="col-lg-1 avatar-manga-comment">
                        <img src="https://firebasestorage.googleapis.com/v0/b/slytherin-b4041.appspot.com/o/DSC02249.jpg?alt=media&token=3f126842-44ea-4342-b395-6f492b19505b" alt=""/>
                    </div>
                    <div className="col-lg-11">
                        <textarea
                            className="manga-comment-textarea"
                            rows={this.state.rows}
                            value={this.state.value}
                            placeholder={'Enter your text here...'}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="list-comment">
                    <div className="comment">
                        <div className="row">
                            <div className="col-lg-1 avatar-manga-comment">
                                <img src="https://firebasestorage.googleapis.com/v0/b/slytherin-b4041.appspot.com/o/DSC02249.jpg?alt=media&token=3f126842-44ea-4342-b395-6f492b19505b" alt=""/>
                            </div>
                            <div className="col-lg-11">
                                <div className="username-coment">
                                    <Link >userName</Link>
                                </div>
                                <div>
                                    <span>Gió đưa cây cải về trời</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <div className="row">
                            <div className="col-lg-1 avatar-manga-comment">
                                <img src="https://firebasestorage.googleapis.com/v0/b/slytherin-b4041.appspot.com/o/DSC02249.jpg?alt=media&token=3f126842-44ea-4342-b395-6f492b19505b" alt=""/>
                            </div>
                            <div className="col-lg-11">
                                <div className="username-coment">
                                    <Link>Slytherin</Link>
                                </div>
                                <div >
                                    <span>Rau răm ở lại chịu lời đắng cay</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <div className="row">
                            <div className="col-lg-1 avatar-manga-comment">
                                <img src="https://firebasestorage.googleapis.com/v0/b/slytherin-b4041.appspot.com/o/DSC02249.jpg?alt=media&token=3f126842-44ea-4342-b395-6f492b19505b" alt=""/>
                            </div>
                            <div className="col-lg-11">
                                <div className="username-coment">
                                    <Link >tserName</Link>
                                </div>
                                <div>
                                    <span>ôi bầu trời ôi bao vị thần 
                                    đã chứng dám đã hiểu lòng ta 
                                    mà tại sao vẫn không mỉm cười
                                    vì thấy đôi ta vẫn chia ly...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MangaComment
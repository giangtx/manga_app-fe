import React from 'react'
import Header from './Header'
import Footer from './Footer'
import B88 from '../B88/B88'
class Layout extends React.Component{
   
    render(){
        return(
            <div>
                <Header></Header>
                {this.props.children}
                <B88></B88>
                <Footer></Footer>
            </div>
        )
    }
}
export default Layout
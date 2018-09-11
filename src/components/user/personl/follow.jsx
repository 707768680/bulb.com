import React, { Component } from 'react'
import scssObj from "../../../App.scss";
import {Link} from "react-router-dom"

class Follow extends Component {
  constructor(props){
    super(props)
    this.state = {
    
    }
  }
  componentDidMount = () => {
   
  }
  render(){
    return(
        // !this.state.sign? 'loading' : (
        <div className={scssObj.classlistLayout} id="keji">
        <div className="container">
          <div className="row">
            <div className="col-3">
            <div className= {scssObj.classlist + " list-group"}>
              <Link to="/person" className="list-group-item list-group-item-action ">个人资料</Link>
              <Link to="/friends" className="list-group-item list-group-item-action">我的灯友</Link>
              <Link to="/group" className="list-group-item list-group-item-action">我的群组</Link>
              <Link to="/takein" className="list-group-item list-group-item-action">我参与的</Link>
              <Link to="/follow" className="list-group-item list-group-item-action active">我关注的</Link>
            </div> 
            </div>    
        
             <div className={scssObj.person + " col-9"}>
              <div className={scssObj.content}>
                <div><h3>我关注的</h3></div>               
                <div className={scssObj.item}>
                <h2>还没有关注</h2>
                 
                </div>
              </div>
                
             </div>
     
           
          </div>
        </div>
         
         
        </div>
    )
}
}

export default Follow;
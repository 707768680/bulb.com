import React, { Component } from 'react'
import scssObj from "../../../App.scss";
import {Link} from "react-router-dom"

class Friends extends Component {
  constructor(props){
    super(props)
    this.state = {
        items:[]
    }
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
    .then(response => response.json())
    // this.setState({items:json})
    .then(json => this.setState({items:json}))
  }
  render(){
    const friend = this.state.items.map(item => {
        return(
        //  <div className={scssObj.item + " container"} key={post.id}>
        //    <h5 className="display-4">{post.title}</h5>
        //    <p className="lead">{post.body}</p>
        //  </div>
           <a href="#" key={item.id}><li className={scssObj.friendsItem} >{item.name}</li></a>
        
          )})
    return(
        // !this.state.sign? 'loading' : (
        <div className={scssObj.classlistLayout} id="keji">
        <div className="container">
          <div className="row">
            <div className="col-3">
            <div className= {scssObj.classlist + " list-group"}>
              <Link to="/person" className="list-group-item list-group-item-action ">个人资料</Link>
              <Link to="/friends" className="list-group-item list-group-item-action active">我的灯友</Link>
              <Link to="/group" className="list-group-item list-group-item-action">我的群组</Link>
              <Link to="/takein" className="list-group-item list-group-item-action">我参与的</Link>
              <Link to="/follow" className="list-group-item list-group-item-action">我关注的</Link>
            </div> 
            </div>    
        
             <div className={scssObj.person + " col-9"}>
              <div className={scssObj.content}>
                <div><h3>我的灯友</h3></div>               
                <div className={scssObj.item}>
                  <ul>
                      {friend}
                  </ul>
                </div>
              </div>
                
             </div>
     
           
          </div>
        </div>
         
         
        </div>
    )
}
}

export default Friends;
import React, { Component } from 'react'
import scssObj from "../../App.scss";
import {Link} from "react-router-dom"

class Person extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  .then(response => response.json())
  .then(json => console.log(json))
  }
  render(){
    return(
        // !this.state.sign? 'loading' : (
        <div className={scssObj.classlistLayout} id="keji">
        <div className="container">
          <div className="row">
            <div className="col-3">
            <div className= {scssObj.classlist + " list-group"}>
              <Link to="/keji" className="list-group-item list-group-item-action active">个人资料</Link>
              <Link to="/shenghuo" className="list-group-item list-group-item-action">我的灯友</Link>
              <Link to="/aihao" className="list-group-item list-group-item-action">我的群组</Link>
              <Link to="/yule" className="list-group-item list-group-item-action">我参与的</Link>
              <Link to="/aihao" className="list-group-item list-group-item-action">我关注的</Link>
            </div> 
            </div>    
        
             <div className={scssObj.person + " col-9"}>
              <div className={scssObj.content}>
                <div><h3>个人资料</h3></div>               
                <div className={scssObj.item}>
                <div className={scssObj.head}>头像</div>
                  <ul>
                    <li>ID:</li>
                    <li>昵称:</li>
                    <li>实名:</li>
                    <li>email:</li>
                    <li>地区:</li>
                    <li>电话:</li>
                    <li>公司:</li>
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

export default Person;
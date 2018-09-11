import React, { Component } from 'react'
import scssObj from "../../App.scss";
import {Link} from "react-router-dom"

class Person extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:[
        { id:"",
        username:"",
        name:"",
        email:"",
        phone:"",
        address:{
          city:""
        },
        company:{
          name:""
        }
      }

      ]
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
    return(
        // !this.state.sign? 'loading' : (
        <div className={scssObj.classlistLayout} id="keji">
        <div className="container">
          <div className="row">
            <div className="col-3">
            <div className= {scssObj.classlist + " list-group"}>
              <Link to="/person" className="list-group-item list-group-item-action active">个人资料</Link>
              <Link to="/friends" className="list-group-item list-group-item-action">我的灯友</Link>
              <Link to="/group" className="list-group-item list-group-item-action">我的群组</Link>
              <Link to="/takein" className="list-group-item list-group-item-action">我参与的</Link>
              <Link to="/follow" className="list-group-item list-group-item-action">我关注的</Link>
            </div> 
            </div>    
        
             <div className={scssObj.person + " col-9"}>
              <div className={scssObj.content}>
                <div><h3>个人资料</h3></div>               
                <div className={scssObj.item}>
                <div className={scssObj.head}>头像</div>
                  <ul>
                    <li>ID:<span>{this.state.items[0].id}</span></li>
                    <li>昵称:<span>{this.state.items[0].username}</span></li>
                    <li>实名:<span>{this.state.items[0].name}</span></li>
                    <li>email:<span>{this.state.items[0].email}</span></li>
                    <li>地区:<span>{this.state.items[0].address.city}</span></li>
                    <li>电话:<span>{this.state.items[0].phone}</span></li>
                    <li>公司:<span>{this.state.items[0].company.name}</span></li>
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
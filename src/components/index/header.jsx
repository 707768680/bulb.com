import React from "react";
import scssObj from "../../App.scss";
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { status } from '../../Redux/actions/action.js';

class Home extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   actived: 1
    // }  
  }
  // componentWillReceiveProps(nextStatus){
  //   if(nextStatus){
  //     this.setState({
  //       actived:2
  //     })
  //   }
  // }
  componentDidMount(){
    if(localStorage.remember == "TRUE" || sessionStorage.logined == "Y"){
      document.getElementById("loginbutton").style.display = "none";
      document.getElementById("person").innerHTML = "个人中心";
      document.getElementById("exit").style.display = "block";
    }
    // if(sessionStorage.logined == "Y"){
    //   // console.log("已登录");
    //   // let loginedhtml = '<a href="#" style="color: #fff;opacity:0.5; ">个人中心</a>'
    //   document.getElementById("loginbutton").style.display = "none";
    //   document.getElementById("person").innerHTML = "个人中心";
    //   document.getElementById("exit").style.display = "block";
    // }
  }
  exitlogin(){
    sessionStorage.logined = "N";
    localStorage.remember = "";
    document.getElementById("exit").style.display = "none";
    window.location.href = "/";
  }
  render() {
    return (
      <div>
        <nav className={ scssObj.position + " navbar navbar-expand-lg navbar-dark " }>
          <div className={scssObj.wrap}>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText" >
              <h1 className={ scssObj.brand }>bulb</h1>   
              <ul className= { scssObj.navUl + " navbar-nav mr-auto"}>
              {/* <Link to="/"><img src={ require('../../images/51miz-E370681-A04BFB812.png') } alt="" className={ scssObj.logo} /></Link>  */}
              <a href="/"><img src={ require('../../images/51miz-E370681-A04BFB812.png') } alt="" className={ scssObj.logo} /></a> 
                <li className="nav-item ">
                  <a className="nav-link" href="/" >
                  
                    灯泡网 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/rank" >
                    亮度榜
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="friends" >
                    
                  </Link>
                </li> */}
              </ul>
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-light"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div className={scssObj.buttons} id="loginbutton">
               <Link to="/login"><button type="button" className="btn btn-secondary btn-sm">登录</button></Link>
               <Link to="/register"><button type="button" className="btn btn-secondary btn-sm">注册</button></Link>
              </div>
               <Link to="/person" id="person" className={scssObj.person}></Link>
               <a href="#" onClick={this.exitlogin} id="exit" className={scssObj.exit}>退出登录</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;

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
      document.getElementById("personspace").className = "dropdown show";
      document.getElementById("exit").style.display = "block";
    }
  }
  exitlogin(){
    sessionStorage.logined = "N";
    localStorage.remember = "";
    document.getElementById("exit").style.display = "none";
    document.getElementById("personspace").style.display = "none";
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
              <Link to="/"><img src={ require('../../images/51miz-E370681-A04BFB812.png') } alt="" className={ scssObj.logo} /></Link> 
                <li className="nav-item ">
                  <Link className="nav-link" to="/" >
                  
                    灯泡网 <span className="sr-only">(current)</span>
                  </Link>
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
              <form className={scssObj.search + " form-inline"}>
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
               {/* <Link to="/person" id="person" className={scssObj.person}></Link> */}

               {/* <div class={scssObj.dropdown + " dropdown show"} id="personspace">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    个人空间
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">消息</a>
                    <a class="dropdown-item" href="#">账号设置</a>
                    <a class="dropdown-item" href="#">帮助</a>
                  </div>
                </div> */}

                  <div className={scssObj.dropdown + " btn-group"} id="personspace">
                 
                  <button type="button" class="btn btn-secondary">个人空间</button>
                  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only"></span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/person">个人空间</Link>
                      <a className="dropdown-item" href="#">消息</a>
                      <a className="dropdown-item" href="#">账号设置</a>
                      <a className="dropdown-item" href="#">帮助</a>                     
                      <a className="dropdown-item" href="#" id="exit" onClick={this.exitlogin}>退出登录</a>                     
                    </div>
                  </div>

           

               {/* <a href="#" onClick={this.exitlogin} id="exit" className={scssObj.exit}>退出登录</a> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;

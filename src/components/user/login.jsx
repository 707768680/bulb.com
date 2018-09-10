import React from "react";
import scssObj from "../../App.scss";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { status } from '../../Redux/actions/action.js';

class Login extends React.Component{
    login = () => {
        // console.log("111")
        // let username = document.getElementById("exampleInputEmail1").value
        if(this.isNone()){
            if(localStorage.user){
                let arr = JSON.parse(localStorage.user);
                let k = 0;
                for(var e in arr){
                    var userName = document.getElementById("exampleInputEmail1").value;
                    var userPsd = document.getElementById("exampleInputPassword1").value;
                    if(userName == arr[e].loginName){
                       if(userPsd == arr[e].loginPsd){  
                        //  TODO 改变导航栏样式

                        // alert("登录成功");
                        //  window.history.go(0);
                        if(document.getElementById("inlineCheckbox1").checked){
                            localStorage.setItem("remember","TRUE")
                        }
                        window.location.href="/"
                        // this.props.history.push('/');
                        //  this.props.login();
                        sessionStorage.logined = "Y";
                        sessionStorage.userName = userName;
                        sessionStorage.userPsd = userPsd;
                        this.clear();
                       }else{
                           alert("密码错误");
                           this.clear();
                       }
                    }else{
                        alert("用户名错误");
                        this.clear();
                    }
                }
            }else{
                alert("用户名不存在")
                this.clear();
            }
        }
        
    }
    clear(){
        document.getElementById("exampleInputEmail1").value = "";
        document.getElementById("exampleInputPassword1").value = "";
    }
    isNone(){
        if(document.getElementById("exampleInputEmail1").value.trim() === ""){
            alert('请输入用户名');
            return false;
        }else if(document.getElementById("exampleInputPassword1").value.trim() === ""){
            alert('请输入密码');
            return false;
        }
        return true;
    }
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.login();
        
    // }
    render(){
        return(
            <div className={scssObj.login}>
                <div className={scssObj.loginUser}>
                    <h2>欢迎登录</h2>
                    <form>
                      <div className={ scssObj.inputGroup + " form-group"}>
                        {/* <label for="exampleInputEmail1">Email address</label> */}
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="用户名" />
                      </div>
                      <div className="form-group">
                        {/* <label for="exampleInputPassword1">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="请输入密码" />
                      </div>
                      <div className={ scssObj.passwordServer }>
                       <div className="form-check form-check-inline">
                       <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                       <label className="form-check-label" htmlFor="inlineCheckbox1">记住密码</label>                     
                     </div>
                     <a href="#" className={ scssObj.forget }>忘记密码?</a>
                     </div>
                      
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.login}>登录</button>
                    <div className={scssObj.linkRegister}>
                     没有账号?<Link to="/register"> 立即注册</Link>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     status: state.posts.items,
//   })

export default Login;
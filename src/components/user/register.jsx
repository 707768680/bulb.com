import React from "react";
import scssObj from "../../App.scss";
import {Link} from 'react-router-dom';

class register extends React.Component{
    register = () => {
        // localStorage.setItem()
        if(this.isNone()){
            let arr = [];
            if(localStorage.user){
                arr = JSON.parse(localStorage.user);
                for(var e in arr){
                    if(document.getElementById("exampleInputEmail1").value.trim() == arr[e].loginName){
                        alert('该用户名已被注册');
                        this.clear();
                        return;
                    }
                }
            }
            const user = {
                'loginName': document.getElementById("exampleInputEmail1").value,
                'loginPsd':document.getElementById("exampleInputPassword1").value
            };
            arr.push(user);
            localStorage.user = JSON.stringify(arr);
            // alert('注册成功');
            // window.history.go(0);
            window.location.href="/"
            this.clear();
        }
    }
    clear(){
        document.getElementById("exampleInputEmail1").value = "";
        document.getElementById("exampleInputPassword1").value = "";
        document.getElementById("exampleInputPassword2").value = "";
    }
    isNone(){
        if(document.getElementById("exampleInputEmail1").value.trim() === ""){
            alert('请输入用户名');
            return false;
        }else if(document.getElementById("exampleInputPassword1").value.trim() === ""){
            alert('请输入密码');
            return false;
        }else if(document.getElementById("exampleInputPassword2").value.trim() === ""){
            alert('两次输入密码不一致');
            return false;
        }
        return true;
    }
    render(){
        return(
            <div className={scssObj.login}>
            <div className={scssObj.loginUser}>
                <h2>用户注册</h2>
                <form>
                  <div className={ scssObj.inputGroup + " form-group"}>
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="用户名" />
                  </div>
                  <div className="form-group">
                    {/* <label for="exampleInputPassword1">Password</label> */}
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="请输入密码" />                
                 </div>
                  <div className="form-group">
                    {/* <label for="exampleInputPassword1">Password</label> */}
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="请再次确认密码" />                
                 </div>
                  
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.register}>注册</button>
                <div className={ scssObj.linkLogin }>已有账号? <Link to="/login">立即登录</Link></div>
                </form>
            </div>
        </div>
        )
    }
}
export default register;
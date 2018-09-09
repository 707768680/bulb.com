import React, { Component } from "react";
import { BrowserRouter, Link ,NavLink} from "react-router-dom";
// import logo from './logo.svg';
// import scssObj from "./App.scss";
import Route from 'react-router-dom/Route';

import  { Provider } from 'react-redux';
import store from './store.js'


import { Redirect } from 'react-router-dom';

import Header from './components/index/header.jsx'
import Content from './components/index/content.jsx'
import Footer from './components/index/footer.jsx'
import Rank from './components/rank/rank.jsx'
import Friends from './components/user/friends.jsx'
import Login from './components/user/login.jsx'
import Register from './components/user/register.jsx'
import Start from './components/trip/start.jsx'
import Keji from './components/classify/keji.jsx'
import Shenghuo from './components/classify/shenghuo.jsx'
import Yule from './components/classify/yule.jsx'
import Aihao from './components/classify/aihao.jsx'
import Qita from './components/classify/qita.jsx'
import Person from './components/user/person.jsx'
 

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     logined: false
  //   }  
  // }
  
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Provider store={store}>    
    
      <BrowserRouter>
        <div>
            <Header></Header>
            
           {/* <Content></Content>
            <Footer></Footer>   */}
            {/* <Link to="/">家</Link>
            <Link to="/product">产品</Link>
            <Link to="/ours">我们</Link> */}     
           {/* <Route exact path="/" component={Header} />  */}
           {/* <Route exact path="/" component={Footer} /> */}

           <Route exact path="/" component={Content}  />
           <Route path="/rank" component={Rank}  /> 
           <Route path="/friends" component={Friends} />          
           <Route path="/login" component={Login} />          
           <Route path="/register" component={Register} />    
           <Route path="/start" component={Start} />   

           <Route path="/keji" component={Keji} />    
           <Route path="/shenghuo" component={Shenghuo} />    
           <Route path="/yule" component={Yule} />    
           <Route path="/aihao" component={Aihao} />    
           <Route path="/qita" component={Qita} />    
           <Route path="/person" component={Person} />    
           {/* <Redirect path="/" to={{pathname: '/'}} /> */}


           <Footer></Footer>
        </div>
      </BrowserRouter>
     </Provider>
    );
  }
  
 
}

export default App;

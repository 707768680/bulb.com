import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/_layui-src@2.3.0@layui-src/dist/css/layui.css' 
import '../node_modules/_layui-src@2.3.0@layui-src/dist/layui.js'
// import layui from '../node_modules/layui-src'

// layui.use('element', function(){
//     var element = layui.element;
    
//     //一些事件监听
//     element.on('tab(demo)', function(data){
//       console.log(data);
//     });
//   });
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

  

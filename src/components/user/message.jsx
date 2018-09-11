import React, { Component } from 'react'
import scssObj from "../../App.scss";


class Message extends Component {
  render() {
    return (
      <div className={scssObj.message}>
        <div className={scssObj.mescontent}>
        <h2>我的消息</h2>
        <div className="layui-tab">
          <ul className="layui-tab-title">
            <li className="layui-this">通知</li>
            <li>私信</li>
            <li>@我</li> 
          </ul>
          <div className="layui-tab-content">
            <div className="layui-tab-item layui-show">
              通知页面
            </div>
            <div className="layui-tab-item">私信页面</div>
            <div className="layui-tab-item">@我页面</div>
          </div>
        </div>
      </div>
      </div>
      
    )
  }
}
export default Message;
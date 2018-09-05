import React from "react";
import scssObj from "../../App.scss";

class Start extends React.Component {
  componentDidMount() {
    // 解决跳转到此页面时,滚动条不在最顶端
    document.getElementById("startTrip").scrollIntoView(true);
  }
  render() {
    return (
      <div className={scssObj.startTrip} id="startTrip">
        <div className={scssObj.start}>
          <form className={scssObj.startform + " layui-form"} action="">
            <h1>开始你的创造之旅吧！</h1>
            <ul className="layui-timeline">
              <li className="layui-timeline-item">
                <i className="layui-icon layui-timeline-axis">&#xe63f;</i>
                <div className="layui-timeline-content layui-text">
                  <h2 className="layui-timeline-title">
                    请为你的想法选择几个关键词
                  </h2>
                  <p>
                    关键词有助于我们对您的创意进行分类
                    ,可以让志同道合的灯友快速找到你哦
                  </p>
                </div>
              </li>
              <li className="layui-timeline-item">
                <i className="layui-icon layui-timeline-axis">&#xe63f;</i>
                <div className="layui-timeline-content layui-text">
                  <h3 className="layui-timeline-title">
                    尽量简短的描述一下你的想法
                  </h3>
                  <p>简短直接的描述可以直接抓住别人的注意力</p>
                </div>
              </li>
              <li className="layui-timeline-item">
                <i className="layui-icon layui-timeline-axis">&#xe63f;</i>
                <div className="layui-timeline-content layui-text">
                  <h3 className="layui-timeline-title">
                    详细的说一下你的计划以及预期
                  </h3>
                  <p>
                    创造不是简单的说说,只有详细的计划,以及切实的预期,才能增大成功的几率
                  </p>
                </div>
              </li>
              <li className="layui-timeline-item">
                <i className="layui-icon layui-timeline-axis">&#xe63f;</i>
                <div className="layui-timeline-content layui-text">
                  <div className="layui-timeline-title">
                    <p>填写表单,去发布你的梦想吧,等待灯友的联系</p>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>

        <div className={scssObj.publishform}>
          <div className={scssObj.go}>
            <p>Let's do it</p>
          </div>
        </div>
        <div className={scssObj.doform}>
        <form>
           <div className="form-group">
             <label htmlFor="exampleFormControlSelect1">选择分类</label>
             <select className="form-control" id="exampleFormControlSelect1">
               <option>综合</option>
               <option>科技</option>
               <option>生活</option>
               <option>娱乐</option>
               <option>爱好</option>
               <option>其他</option>
             </select>
           </div>
           <input className="form-control" type="text" placeholder="概括你的想法" />
           <div className="form-group">
             <label htmlFor="exampleFormControlTextarea1">详细说明</label>
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
           </div>
           <button type="submit" className="btn btn-primary mb-2">发布</button>
         </form>
        </div>
      </div>
    );
  }
}

export default Start;

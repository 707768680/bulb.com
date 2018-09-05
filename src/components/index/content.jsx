import React from "react";
import scssObj from "../../App.scss";
import {Link} from "react-router-dom"

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createPost } from '../../Redux/actions/action.js';

class Product extends React.Component {
   
  render() {
    return (
      <div className={ scssObj.content }>
        <div className="container" />
        <div className={ scssObj.rows + " row" }>
          {/* <div className="col-md-10"> */}
          {/* 轮播图区域 */}
          <div id="carouselExampleIndicators" className={scssObj.carouselW + " carousel slide"} data-ride="carousel" data-interval="4000">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className={ scssObj.images + " d-block w-100" } src={require('../../images/learning-ea37b50a2f.jpg')} alt="First slide"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5></h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className={ scssObj.images + " d-block w-100" } src={require('../../images/light-bulb-e837b50928.jpg')} alt="Second slide"/>
                   <div className="carousel-caption d-none d-md-block">
                     <h5></h5>
                   </div>
                </div>
                <div className="carousel-item">
                  <img className={ scssObj.images + " d-block w-100" } src={require('../../images/wedding-e83cb20828.jpg')} alt="Third slide"/>
                   <div className="carousel-caption d-none d-md-block">
                      <h5></h5>
                    </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          {/* </div> */}
          {/* <div className="col-md-2">
            <h1>侧边栏</h1>
          </div> */}
        </div>
        <div className={ scssObj.floor2 }>
            <p>在这里&nbsp;&nbsp;&nbsp;把你的灵光一现&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;变成万丈光芒！</p>
        </div>
        {/* 第二屏  向导、分类 */}
        {/* 向导卡片 */}
        <div className={ scssObj.starttrip }>
         <div className={ scssObj.wel + " jumbotron" }>
          <h1 className="display-4">你好,创造者!</h1>
          <p className="lead">在这里结识与你志同道合的朋友,然后一起碰撞出创意的火花吧!</p>
          <hr className="my-4" />
          {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
          <p className="lead">
            <Link className="btn btn-primary btn-lg" to="/start" role="button">开始旅程</Link>
          </p>
        </div>       
        </div>
        {/* 分类区域 */}
        <div className={ scssObj.cls }>
        <div className={ scssObj.floor2 }>
          <p>热门分类</p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className={ scssObj.colhight + " col"}>
              <p>科技</p>
              <Link to="/keji"><img src={ require('../../images/630.png') } alt=""/></Link>
            </div>
            <div className={ scssObj.colhight + " col"}>
              <p>生活</p>
              <Link to="/shenghuo"><img src={ require('../../images/shenghuo.png') } alt=""/></Link>
            </div>
            <div className={ scssObj.colhight + " col"}>
              <p>娱乐</p>
              <Link to="/yule"><img src={ require('../../images/yule.png') } alt=""/></Link>
            </div>
            <div className={ scssObj.colhight + " col"}>
              <p>爱好</p>
              <Link to="/aihao"><img src={ require('../../images/aihao.png') } alt=""/></Link>
            </div>
          </div>
        </div>
        </div>
        {/* 优秀作品展示 */}

        </div>
       
    );
  }
}

export default Product;

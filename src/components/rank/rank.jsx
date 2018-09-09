import React from "react";
import scssObj from "../../App.scss";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../Redux/actions/action.js';

class Rank extends React.Component{
  componentDidMount (){
    // 解决跳转到此页面时,滚动条不在最顶端
    // document.getElementById("keji").scrollIntoView(true);
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => this.setState({items:json})  )
    this.props.fetchPosts();
}
    render(){
      const postItems = this.props.posts.map(post => {
        return(
        //  <div className={scssObj.item + " container"} key={post.id}>
        //    <h5 className="display-4">{post.title}</h5>
        //    <p className="lead">{post.body}</p>
        //  </div>
        <div className={scssObj.rows + " row"} key={post.id}>
        <div className={scssObj.rowleft + " col-sm-9"}>
          <p>{post.body}</p>
        </div>
        <div className={scssObj.rowright + " col-sm-3"}>
          <p>{post.id}</p>
        </div>
      </div>
          )})
        return(
            <div className={scssObj.rank}>
              <div className={scssObj.banner + " jumbotron"}>
              <h1 className="display-4">亮度排行榜</h1>
              <p className="lead">来看看灯友们的亮度排行吧,启发一下你的创造灵感和热情</p>
              <hr className="my-4" />
              <p className="lead">
                {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
              </p>
            </div>
            <div className= {scssObj.pannel + " container"}>
            {/* <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div> */}
          {postItems}
     
          
            </div>
            </div>          
        )
    }
}



const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Rank);
import React from "react";
import scssObj from "../../App.scss";
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../Redux/actions/action.js';

class Yule extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items:[],
  //     // sign:false
  //   }
  // }
    componentDidMount (){
        // 解决跳转到此页面时,滚动条不在最顶端
        document.getElementById("keji").scrollIntoView(true);
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => this.setState({items:json})  )
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps){
      if (nextProps.newPost != this.props.newPost) {
        this.props.posts.unshift(nextProps.newPost);
        console.log(nextProps.newPost + "收到数据,推入数组1")
      }
    }
    render(){
     const postItems = this.props.posts.map(post => {
        return(
         <div className={scssObj.item + " container"} key={post.id}>
           <h5 className="display-4">{post.title}</h5>
           <p className="lead">{post.body}</p>
         </div>
          )})
        return(
            // !this.state.sign? 'loading' : (
            <div className={scssObj.classlistLayout} id="keji">
            <div className="container">
              <div className="row">
                <div className="col-3">
                <div className= {scssObj.classlist + " list-group"}>
                  <Link to="/keji" className="list-group-item list-group-item-action ">
                    科技
                  </Link>
                  <Link to="/shenghuo" className="list-group-item list-group-item-action">生活</Link>
                  <Link to="/yule" className="list-group-item list-group-item-action active">娱乐</Link>
                  <Link to="/aihao" className="list-group-item list-group-item-action">爱好</Link>
                  <Link to="/qita" className="list-group-item list-group-item-action disabled">其他</Link>
                </div> 
                </div>    
            
                 <div className="col-7">
                 <div className={scssObj.kejiList}>
                 <div className="jumbotron jumbotron-fluid">
                 {/* {this.state.items.map(item => {
                  return(
                   <div className={scssObj.item + " container"} key={item.id}>
                     <h5 className="display-4">{item.title}</h5>
                     <p className="lead">{item.body}</p>
                   </div>
                    )})   }    */}
                    {postItems}
                 </div>
                 </div>
                 </div>
                  
                {/* <div id="list">

                </div> */}
               {/* {this.state.items.map(item => {
                 <div className="col-7">
                 <div className={scssObj.kejiList}>
                 <div className="jumbotron jumbotron-fluid">
                   <div className="container">
                     <h3 className="display-4">{item.title}</h3>
                     <p className="lead">{item.body}</p>
                   </div>
                 </div>
                 </div>
                 </div>
               })} */}
               
              </div>
            </div>
             
             
            </div>
        )
    }
}

// Keji.propTypes = {
//   fetchPosts: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Yule);
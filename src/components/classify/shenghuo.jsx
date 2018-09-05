import React from "react";
import scssObj from "../../App.scss";
import {Link} from "react-router-dom"

class Shenghuo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      // sign:false
    }
  }
    componentDidMount() {
        // 解决跳转到此页面时,滚动条不在最顶端
        document.getElementById("shenghuo").scrollIntoView(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({items:json})  )
      }
    render(){
        return(
            <div className={scssObj.classlistLayout} id="shenghuo">
            <div className="container">
              <div className="row">
                <div className="col-3">
                <div className= {scssObj.classlist + " list-group"}>
                 <Link to="/keji" className="list-group-item list-group-item-action ">
                    科技
                  </Link>
                  <Link to="/shenghuo" className="list-group-item list-group-item-action active">生活</Link>
                  <Link to="/yule" className="list-group-item list-group-item-action">娱乐</Link>
                  <Link to="/aihao" className="list-group-item list-group-item-action">爱好</Link>
                  <Link to="/qita" className="list-group-item list-group-item-action disabled">其他</Link>
                </div> 
                </div>
                <div className="col-7">
                 <div className={scssObj.kejiList}>
                 <div className="jumbotron jumbotron-fluid">
                 {this.state.items.map(item => {
                  return(
                   <div className={scssObj.item + " container"} key={item.id}>
                     <h5 className="display-4">{item.title}</h5>
                     <p className="lead">{item.body}</p>
                   </div>
                    )})   }   
                 </div>
                 </div>
                 </div>
               
              </div>
            </div>
             
             
            </div>
        )
    }
}

export default Shenghuo;
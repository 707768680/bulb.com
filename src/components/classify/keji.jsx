import React from "react";
import scssObj from "../../App.scss";
import {Link} from "react-router-dom"

class Keji extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      // sign:false
    }
  }
    componentDidMount = () => {
        // 解决跳转到此页面时,滚动条不在最顶端
        document.getElementById("keji").scrollIntoView(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({items:json})  )
          
          // let items = [];
          // items = items.concat(this.state.items);
          // items = json;

          // arr = json;
          // this.setState({items:json})
          // this.setState({sign:true})
      
          // console.log(this.state.items)
         
       
        // .then(console.log(this.state.items))
        // this.setState({items:json})
        // console.log(this.state.geti)
    }
    render(){
      // const item = this.state.items.map(post => {
      //   <div className="col-7">
      //   <div className={scssObj.kejiList}>
      //   <div className="jumbotron jumbotron-fluid">
      //     <div className="container">
      //       <h3 className="display-4">{post.title}</h3>
      //       <p className="lead">{post.body}</p>
      //       <p>666</p>
      //     </div>
      //   </div>
      //   </div>
      //   </div>
      // })
        return(
            // !this.state.sign? 'loading' : (
            <div className={scssObj.classlistLayout} id="keji">
            <div className="container">
              <div className="row">
                <div className="col-3">
                <div className= {scssObj.classlist + " list-group"}>
                  <Link to="/keji" className="list-group-item list-group-item-action active">
                    科技
                  </Link>
                  <Link to="/shenghuo" className="list-group-item list-group-item-action">生活</Link>
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

export default Keji;
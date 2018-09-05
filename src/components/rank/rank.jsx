import React from "react";
import scssObj from "../../App.scss";
import {Link} from 'react-router-dom';

class Rank extends React.Component{
    render(){
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
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
            <div className={scssObj.rows + " row"}>
              <div className={scssObj.rowleft + " col-sm-9"}>
                作品
              </div>
              <div className={scssObj.rowright + " col-sm-3"}>
                用户
              </div>
            </div>
           

             
            </div>
            </div>          
        )
    }
}

export default Rank;
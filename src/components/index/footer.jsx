import React from 'react'
import scssObj from "../../App.scss";

class Ours extends React.Component {
    render(){
        return( 
            <div className={ scssObj.footer }> 
                <p className={ scssObj.p1 }>
                    <a href="#">关于灯泡网</a><span>|</span>               
                    <a href="#">联系我们</a><span>|</span>               
                    <a href="#">广告服务</a><span>|</span>                 
                    <a href="#">友情链接</a><span>|</span>                  
                    <a href="#">版权声明</a><span>|</span>                 
                    <a href="#">帮助</a>                
                </p>
            </div>
            
        )
    }
}

export default Ours;
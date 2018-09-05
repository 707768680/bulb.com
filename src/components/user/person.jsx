import React, { Component } from 'react'
import scssObj from "../../App.scss";
class Person extends Component {
  render() {
    return (
      <div className={scssObj.personPage}>
         <h1>个人页面</h1>
      </div>
    )
  }
}

export default Person;
import React, { Component } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { showLocal } from "./ThirdSection";

export default class DAOConsensus extends Component {
  state = {};
  componentDidMount () {
    window.onmessage = (e) => {
      let { type, data } = typeof e.data === 'object' ? e.data : JSON.parse(e.data.split('!').join('').split('_').join(''))
      if (type && data) {
        this.setState({
          height: data.heightOfPage
        })
      }
    }
  }
  render () {
    console.log(this.ff)
    return (
      <div>
        <iframe
          title="Use ZEH to Purchase Properties"
          frameBorder="0"
          width="100%"
          height={this.state.height}
          scrolling="no"
          src={
            showLocal
              ? "http://localhost:3000/org/dao"
              : "https://zeehaus.com/org/dao"
          }
        />
      </div>
    );
  }
}

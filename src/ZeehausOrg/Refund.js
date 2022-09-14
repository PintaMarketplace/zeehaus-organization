import React, { Component } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { showLocal } from "./ThirdSection";

export default class Refund extends Component {
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
    return (
      <div>
        <Grid>
          <iframe
            //   ref={(n) => setIframeTwo(n)}
            title="Refund"
            frameBorder="0"
            height={this.state.height}
            width="100%"
            scrolling="no"
            src={
              showLocal
                ? "http://localhost:3000/org/refund"
                : "https://zeehaus.com/org/refund"
            }
          />
        </Grid>
      </div>
    );
  }
}

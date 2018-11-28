import React, { Component } from "react";
import axios from "axios";

class TreeMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portsData: {}
    };
  }
  componentDidMount() {
    axios.get("/api/data/ports/all").then(res => {
      const portsData = res.data;
      this.setState({ portsData });
    });
  }
  componentDidUpdate() {
    //to do
  }

  render() {
    return <div>Hi</div>;
  }
}
export default TreeMap;

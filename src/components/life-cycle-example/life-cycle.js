import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  constructor(props) {
    super(props)
    console.log("Constructor.....");

    this.state = { num: 5 }
    this.addNum = this.addNum.bind(this)

  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps.....");
    // console.log(props);
    // console.log(state);
    return null
  }

  componentDidMount() {
    // Reqs here
    console.log("componentDidMount.....");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate.....");
    console.log("Previus value: ", this.state);
    console.log("Current value: ", nextState);
    return true
  }

  componentDidUpdate() {
   console.log("componentDidUpdate....."); 
  }

  addNum() {
    console.log("Call SetState.....");
    let newNum = this.state.num
    newNum += 1
    this.setState({ num: newNum })
  }

  render() {
    console.log("Render.....");
    return <div>
      <p>{this.props.title}</p>
      <p><b>{this.state.num}</b></p>
      <button onClick={this.addNum}>Add Number</button>
    </div>
  }
}

export default LifeCycleComponent
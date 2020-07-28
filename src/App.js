import React, {Component} from 'react';
import Shape from "./Shape"


class Selector extends Component{
  constructor(){
    super()
    this.state = {
      selectedShape: "square",
      count:0
    }
  }

  selectShape = (shapeName) => {
    this.setState({
       selectedShape: shapeName
       })
       this.clickCount()
  }

  clickCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return (
      <div className = "container">
        <div className = "navbar">
    <div>Selected: <span>{this.state.selectedShape} </span></div>
        </div>
        <div className = "shape-list">
          <Shape shape="circle" selectShape={this.selectShape} selectedShape={this.state.selectedShape} /> 
          <Shape shape="square" selectShape={this.selectShape} selectedShape={this.state.selectedShape}/>
          <Shape shape="triangle" selectShape={this.selectShape} selectedShape={this.state.selectedShape}/>
        </div>
        <div className="footer">
    <div> {this.state.count}</div>
        </div>
      </div>
    )
  }
}


export default Selector
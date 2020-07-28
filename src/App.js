import React, {Component} from 'react';
import Shape from "./Shape"


class Selector extends Component{
  constructor(){
    super()
    this.state = {
      selectedShape: "square",
      count:0,
      circle:0,
      square:0,
      triangle:0,
    }
  }

  selectShape = (shapeName) => {
    this.setState({
       selectedShape: shapeName
       })
      //  this.clickCount()
      
    this.state[shapeName]++
    
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
          Circle Clicks:
    <div> {this.state.circle}</div>
          Square Clicks:
    <div>{this.state.square}</div>
          Triangle Clicks
    <div>{this.state.triangle}</div>
        </div>
      </div>
    )
  }
}


export default Selector
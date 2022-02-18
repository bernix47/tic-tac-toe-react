import React, { Component } from "react";
import Square from "./Square";

/* class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.Square[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return <div>
        <div className="border-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>  
        <div className="border-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div> 
        <div className="border-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>  
    </div>;
  }
} */

const style = {
  border: "3px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3,1fr) / repeat(3,1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
  {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
  ))}
  </div>
);

export default Board;

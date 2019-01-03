import React, { Component } from 'react';
import './ShoppingList.css';

class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>shopping list {this.props.name}</h1>
        <ul>
            <li>instagram</li>
            <li>whatapp</li>
            <li>oculus</li>
        </ul>
        <Board/>
      </div>
    );
  }
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      xIsNext: true,
      squares: Array(9).fill('null'),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    squares[i] = 'X';
    this.setState({squares: squares, xIsNext: !this.state.xIsNext,});
  }

  // Square(props) {
  //   return (
  //     <button className="square" onClick={props.onClick}>
  //       {props.value}
  //     </button>
  //   );
  // }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)} />;
  }

  render(i) {
    const status = 'next player: x';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick() }>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default ShoppingList;

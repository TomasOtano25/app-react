import React from "react";
import ReactDOM, { render } from "react-dom";

class Button extends React.Component {
  /*handleClick = () => {
    this.props.onClickFunction;
  };*/

  render() {
    return <button onClick={this.props.onClickFunction}>+1</button>;
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};

class App extends React.Component {
  state = { counter: 0 };

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

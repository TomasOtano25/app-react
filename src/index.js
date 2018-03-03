import React from "react";
import ReactDOM, { render } from "react-dom";

class Button extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }*/
  state = { counter: 0 };

  handleClick = () => {
    // this === component instance
    /*this.setState({
      counter: this.state.counter + 1
    });*/

    // Si el segundo estado depende del estado actual

    /*this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });*/

    // Modo corto
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.counter}</button>;
  }
}

const Result = props => {
  return <div>...</div>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Button />
        <Result />
      </div>
    );
  }
}

// render(<App />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

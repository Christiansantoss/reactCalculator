import { Component } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";

{
  /*  include “result” variable in this.state which is passed into our result component. 
This will allow us to manipulate our display. */
}
{
  /* Three functions needed to create the basic calculator features
which is to calculate reset and backspace */
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Pocket Calculator 🤓</h1>
          <ResultComponent result={this.state.result} />
          {/* on click triggered when a certain button is pressed! */}
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;

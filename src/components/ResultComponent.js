import React, { Component } from "react";

{
  /* component to display output */
}
{
  /* one p tag which displays content from props line 12 */
}
class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default ResultComponent;

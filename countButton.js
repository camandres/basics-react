


'use strict';

const e = React.createElement;

class counterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
   /* if (this.state.counter) {
      return React.createElement("button", {className: "counter"},React.createElement("span"),this.state.counter);
    }*/

    return e(
      'button',
      { onClick: () => this.setState({ counter:this.state.counter+1}) },
      'You clicked ' + this.state.counter
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.counter')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const counter = 0//parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(counterButton, { counter: counter }),
      domContainer
    );
  });
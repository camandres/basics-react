'use strict';
//export default class Button extends React.Component {
class Button extends React.Component {
  handleClick = () =>  {
  this.props.onClickFunction(this.props.incrementValue);
  };

  render(){
      return (
       <button onClick={this.handleClick}>
       + {this.props.incrementValue}
      </button>
      );
  }
}

const Result = (props) => {
 return (
  <div>{props.counter}</div>
 );
};

class App extends React.Component {
 state={counter:0}
 
 incrementCounter = (incrementValue) => {
  this.setState((prevState)=>({
    counter: prevState.counter + incrementValue
    }));
   };

 render(){
  let result=[];
  var i;
  var fib = []; // Initialize array!
    
  fib[0] = 0;
  fib[1] = 1;
  for(i=2; i<=20; i++){
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i-2] + fib[i-1];
        result.push(<Button incrementValue={fib[i]} onClickFunction=  {this.incrementCounter}/>);
    }
   const h=<Result counter={this.state.counter} />
   return <div>{result}{h}</div>;
 }
}
ReactDOM.render(<App/>,mountNode)
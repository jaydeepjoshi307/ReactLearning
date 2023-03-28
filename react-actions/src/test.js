import React from "react";
import ReactDOM from "react-dom/client";

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      color: props.color,
      counter: 1
    };
  }

  componentDidMount() {
    console.log("in component did mount", this.state.counter);
  }
  componentDidUpdate() {
    console.log("in component did update", this.state.counter);
  }
  // componentWillReceiveProps(props){
  //   console.log(props);
  // }
  render() {
    return (
      <h2>
        I am a {this.state.color} Car!
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
        <br />
        Counter value is : {this.state.counter}{" "}
      </h2>
    );
  }
}
export default Home;

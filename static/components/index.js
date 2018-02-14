import React, { Component } from "react";
import ReactDOM from "react-dom";
import Field from "./Field.jsx";
import { observe } from "./Game";


const socket = io.connect("http://" + document.domain + ":" + location.port);
console.log("Start");

socket.on("client", (msg) => {
    console.log("client");
    document.getElementById("messages").innerHTML += msg + "<br>";
});

let team = [
  { number: 3, position: "b9" },
  { number: 11, position: "h13" },
  { number: 14, position: "m6" },
];

class Ayaqdop extends Component {
	constructor(props) {
		super(props);
		this.unobserve = observe(this.handleChange.bind(this));
	}

	handleChange(piecePosition) {
		const nextState = { piecePosition };
		if (this.state) {
			this.setState(nextState);
		} else {
			this.state = nextState;
		}
	}

	componentWillUnmount() {
		this.unobserve();
	}

	render() {
		const { piecePosition } = this.state;
		return (
      <Field piecePosition={[ 7, 10 ]} />
		);
	}
}

ReactDOM.render(
  <Ayaqdop />,
  document.getElementById("app")
);

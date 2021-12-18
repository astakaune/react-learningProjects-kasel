import React from "react";


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dateProps: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
		// setInterval(tick, 1000);
	}
	tick() {
		this.setState({ dateProps: new Date() }); //1budas su arrow function
		// this.setState(function(){return{dateProps: new Date() }}); //2budas su function
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		return (
			<div>
				<br />
				<h1>Hello, you!</h1>
				{/* <h2>It is {this.props.dateProps.toLocaleTimeString()}.</h2> */}
				{/* move from props to state */}
				<h2>It is {this.state.dateProps.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

export default Clock;

// const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

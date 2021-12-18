import React from "react";
import "./App.css";

import ConsoleItems from "./components/consoleItems/ConsoleItems";

import Comment from "./components/comment/Comment";
import comment from "./data/comment";

import Clock from "./components/clock/Clock";

import Forma from "./components/forma/Forma";

import Toggle from "./components/toggleButton/Toggle";

function App() {
	return (
		<div className="container">
			{/* ----consoleItems - props------- */}
			<ul>
				<ConsoleItems />
			</ul>

			{/* -------comment-props--------- */}
			<div>
				<Comment dateProps={comment.date} textProps={comment.text} authorProps={comment.author} />
			</div>

			{/* ------clock - state---------- */}
			{/* <Clock dateProps={new Date()}/> */}
			{/* move from props to state */}
			<Clock />
			<Clock />

			{/* ----forma - onSubmit={handleSubmit}---- */}
			<Forma />

			{/* ----toggle button ---- */}
			<Toggle />
		</div>
	);
}

export default App;

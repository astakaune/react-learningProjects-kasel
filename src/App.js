import React from "react";
import "./App.css";

import ConsoleItems from "./components/consoleItems/ConsoleItems";

import Comment from "./components/comment/Comment";
import comment from "./data/comment";

function App() {
	return (
		<div className="container">

			{/* consoleItems */}
			<ul>
				<ConsoleItems />
			</ul>

			{/* comment */}
			<div>
				<Comment dateProps={comment.date} textProps={comment.text} authorProps={comment.author} />
			</div>
		</div>
	);
}

export default App;

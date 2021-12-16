import React from "react";
import UserInfo from "./UserInfo";

function Comment(props) {
	const formatDate = (date) => {
		return date.toLocaleDateString();
	};

	return (
		<div className="Comment">
			<UserInfo userProps={props.authorProps} />
			<div className="Comment-text">{props.textProps}</div>
			<div className="Comment-date">{formatDate(props.dateProps)}</div>
		</div>
	);
}

export default Comment;

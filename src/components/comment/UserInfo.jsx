import React from "react";
import Avatar from "./Avatar";

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar userAvatarProps={props.userProps} />
			<div className="UserInfo-name">{props.userProps.name}</div>
		</div>
	);
}

export default UserInfo;

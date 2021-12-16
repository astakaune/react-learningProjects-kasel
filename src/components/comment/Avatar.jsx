import React from "react";

function Avatar(props) {
	return <img className="Avatar" src={props.userAvatarProps.avatarUrl} alt={props.userAvatarProps.name} />;
}

export default Avatar;

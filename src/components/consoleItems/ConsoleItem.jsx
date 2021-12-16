import React from "react";

function ConsoleItem(props) {
	// const properties = () => {
	//     const items = [];
	// 	for (const item of items) {
	// 		for (const data in item) {
	// 			return data + ":" + item[data];
	// 		}
	// 	}
	// };
	return (
		<>
			<li>{props.idProps}</li>
			<li>{props.titleProps}</li>
			<li>{props.countProps}</li>
			<p>----------</p>
			{/* {properties} */}
		</>
	);
}

export default ConsoleItem;

// `Property: ${property}; -- Value: ${item[property]};`;
//           `${props.data}: ${props.item[data]}`

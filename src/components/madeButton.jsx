import React from "react";

const MadeButton = (props) => {
	console.log(props);
	return (
		<div>
			<button className={props.name}> {props.name}</button>
		</div>
	);
};

export default MadeButton;

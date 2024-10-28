import React from "react";
import "./styles.css";
import MadeButton from "./madeButton";

const BoxComponent = ({ title, response, buttons }) => {
	return (
		<div className='Box'>
			<div className='Box-Content'>민원 내용: {title}</div>
			<hr />
			<div className='Box-Response'>답변: {response}</div>
			<div className='Box-Buttons'>
				{buttons.map((button, index) => (
					<MadeButton key={index} name={button} />
				))}
			</div>
		</div>
	);
};

export default BoxComponent;

import React from "react";
import MadeButton from "./madeButton";
import "./styles.css";
import BoxComponent from "./boxComponent";

const Container = () => {
	const Buttonlist = {
		start: {
			name: "시작하기",
		},
		edit: {
			name: "내용 수정",
		},
		sameResponse: {
			name: "모든 동일 답변 등록",
		},
		personalResponse: {
			name: "개별 답변 등록",
		},
	};
	return (
		<main>
			{/*<MadeButton name={Buttonlist.start.name}></MadeButton>*/}

			<BoxComponent
				title='민원내용1'
				response='답변1'
				buttons={[
					Buttonlist.edit.name,
					Buttonlist.sameResponse.name,
					Buttonlist.personalResponse.name,
				]}
			/>
			<BoxComponent
				title='민원내용2'
				response='답변2'
				buttons={[
					Buttonlist.edit.name,
					Buttonlist.sameResponse.name,
					Buttonlist.personalResponse.name,
				]}
			/>
		</main>
	);
};

export default Container;

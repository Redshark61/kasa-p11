import Arrow from "../Arrow";

interface Props {
	handleClick: ({delta}: { delta: 1 | -1 }) => void
}

export function CarouselArrows({handleClick}: Props) {
	return (
		<div
			className={"absolute flex justify-between items-center"}
			style={{
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: "calc(100% - 100px)",
			}}
		>
			<Arrow direction={"right"} onClick={() => handleClick({delta: -1})}/>
			<Arrow direction={"left"} onClick={() => handleClick({delta: 1})}/>
		</div>
	)
}
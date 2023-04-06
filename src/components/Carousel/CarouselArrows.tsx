import Arrow from "../Arrow";
import className from './index.module.css'

interface Props {
	handleClick: ({delta}: { delta: 1 | -1 }) => void
}

export function CarouselArrows({handleClick}: Props) {
	return (
		<div
			className={`absolute flex justify-between items-center ${className.arrows}`}
			style={{
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: "calc(100% - 7vw)",
			}}
		>
			<Arrow thickness={".7vw"} direction={"right"} onClick={() => handleClick({delta: -1})}/>
			<Arrow thickness={".7vw"} direction={"left"} onClick={() => handleClick({delta: 1})}/>
		</div>
	)
}
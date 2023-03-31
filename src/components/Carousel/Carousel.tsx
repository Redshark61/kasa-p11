import {useState} from "react";
import Arrow from "../Arrow";

interface CarouselProps {
	pictures: string[];
}

export default function Carousel({pictures}: CarouselProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const handleClick = ({delta}: { delta: 1 | -1 }) => {
		if (currentImageIndex === pictures.length - 1 && delta === 1) {
			setCurrentImageIndex(0)
		} else if (currentImageIndex === 0 && delta === -1) {
			setCurrentImageIndex(pictures.length - 1)
		} else {
			setCurrentImageIndex((prevState) => prevState + delta)
		}
	}

	return (
		<div style={{
			height: 415,
			backgroundImage: `url(${pictures[currentImageIndex]})`
		}} className={"w-full bg-pos-center relative bg-size-cover radius-25"}>
			<div
				className={"w-full h-full absolute"}
				style={{
					backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,0,0,6) 100%)"
				}}
			></div>
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
			{pictures.length > 1 &&
				<span className={"absolute text-18 font-500 text-white"}
					  style={{bottom: 25, right: 25}}>{currentImageIndex + 1}/{pictures.length}</span>}
		</div>
	)
}
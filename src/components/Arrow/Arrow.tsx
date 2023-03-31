import React, {useEffect} from "react";
import {Property} from "csstype";

interface Props {
	width?: number;
	height?: number;
	color?: string;
	thickness?: number;
	direction?: "left" | "right" | "up" | "down";
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	isButton?: boolean;
}

export default function Arrow({
								  width = 80,
								  height = 80,
								  color = "fff",
								  thickness = 10,
								  direction = "right",
								  className,
								  style = {},
								  onClick,
								  isButton = true,
							  }: Props) {
	let rotation = 0
	if (direction === "down") {
		rotation = 135;
	} else if (direction === "left") {
		rotation = 45;
	} else if (direction === "right") {
		rotation = 225;
	} else if (direction === "up") {
		rotation = 315;
	}
	const [transform, setTransform] = React.useState<Property.Transform>(`rotate(${rotation}deg)`);
	const inlineStyle: React.CSSProperties = {
		width: width,
		height: height,
		borderTop: `${thickness}px solid #${color}`,
		borderRight: `${thickness}px solid #${color}`,
		transform: transform,
		cursor: "pointer",
		...style,
	}

	useEffect(() => {
		if (style?.transform) {
			setTransform((prevState) => `${prevState} ${style.transform}`);
			delete style.transform;
		}
	}, []);

	return <>
		{isButton ? (
			<button
				style={inlineStyle}
				className={`reset-button ${className}`}
				onClick={onClick}
			></button>) : (
			<div
				style={inlineStyle}
				className={`${className}`}
				onClick={onClick}
			></div>
		)}
	</>

}

import React, {useEffect} from "react";
import {Property} from "csstype";
import stylesheetClassName from './index.module.css'

interface Props {
	color?: string;
	direction?: "left" | "right" | "up" | "down";
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	isButton?: boolean;
	thickness?: string;
}

export default function Arrow({
								  color = "fff",
								  direction = "right",
								  className = '',
								  style = {},
								  onClick,
								  isButton = true,
								  thickness = ".4vw",
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
		borderTop: `${thickness} solid #${color}`,
		borderRight: `${thickness} solid #${color}`,
		transform: transform,
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
				className={`${stylesheetClassName.arrow} arrow reset-button ${className}`}
				onClick={onClick}
			></button>) : (
			<div
				style={inlineStyle}
				className={`${stylesheetClassName.arrow} arrow ${className}`}
				onClick={onClick}
			></div>
		)}
	</>

}

import React, { useEffect } from "react";

interface Props {
	width?: number;
	height?: number;
	color?: string;
	thickness?: number;
	direction?: "left" | "right" | "up" | "down";
	className?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

export default function Arrow({
	width = 80,
	height = 80,
	color = "000",
	thickness = 10,
	direction = "right",
	className,
	style = {},
	onClick,
}: Props) {
	const rotation =
		direction === "left" ? 45 : direction === "right" ? 225 : direction === "up" ? 135 : -135;
	const [transform, setTransform] = React.useState<string>(`rotate(${rotation}deg)`);

	useEffect(() => {
		if (style?.transform) {
			setTransform((prevState) => `${prevState} ${style.transform}`);
			delete style.transform;
		}
	}, []);

	return (
		<div
			style={{
				width: width,
				height: height,
				borderTop: `${thickness}px solid #${color}`,
				borderRight: `${thickness}px solid #${color}`,
				transform: transform,
				cursor: "pointer",
				...style,
			}}
			className={className}
			onClick={onClick}
		></div>
	);
}

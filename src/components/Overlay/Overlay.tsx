import {CSSProperties} from "react";

interface OverlayProps {
	styles?: CSSProperties;
}

export default function Overlay({styles}: OverlayProps) {
	return (
		<div
			className={"absolute inset-0 z-0"}
			style={styles ? styles : {background: "rgba(0, 0, 0, 0.5)"}}
		></div>
	)
}
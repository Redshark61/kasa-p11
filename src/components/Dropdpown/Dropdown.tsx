import React, {useState} from "react";
import Arrow from "../Arrow";

interface Props {
	children: React.ReactNode
	title: string
}

export default function Dropdown({children, title}: Props) {
	const [open, setOpen] = useState(false);
	return (
		<div className="w-half">
			<button
				className="z-1 relative bg-primary flex justify-between items-center px-20 py-15 w-full text-white radius-10"
				style={{
					border: "none",
				}}
				onClick={() => setOpen((prevState) => !prevState)}
			>
				{title}
				<div style={{transform: `translateY(${open ? '' : '-'}25%) rotate(${open ? '180' : '0'}deg)`}}>
					<Arrow width={24} height={24} thickness={5} direction={"down"} isButton={false}/>
				</div>
			</button>
			{open && (
				<div className="relative radius-10 z-0 pb-50 pt-40 px-20 text-primary"
					 style={{background: "#F7F7F7", marginTop: "-10px"}}>
					{children}
				</div>
			)}
		</div>
	)
}
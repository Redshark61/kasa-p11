import Overlay from "../Overlay";
import className from './index.module.css'

interface CardProps {
	title: string;
	image: string;
}

export default function Card({title, image}: CardProps) {
	return (
		<div
			className={`${className.card} radius-15 bg-pos-center flex justify-start items-end relative overflow-hidden`}
			style={{
				backgroundImage: `url(${image})`,
			}}>
			<Overlay
				styles={{
					background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
				}}
			/>
			<h2 className={"text-18 font-500 text-white m-20 z-1"}>{title}</h2>
		</div>
	)
}
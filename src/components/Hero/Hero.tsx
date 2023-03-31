import className from './index.module.css'

interface Props {
	image: string
	text?: string
}

export default function Hero({image, text}: Props) {
	return (
		<div
			className={`h-220 mt-80 relative bg-pos-y-center bg-size-cover flex justify-center items-center radius-25 ${className.hero}`}
			style={{
				backgroundImage: `url(${image})`,
			}}>
			<div className={"absolute inset-0 bg-black opacity-30 z-0 radius-25"}></div>
			{text && <h1 className={"text-white font-500 z-1 text-48"}>{text}</h1>}
		</div>
	)
}
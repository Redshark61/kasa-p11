import image from '/hero.png'

export default function Hero() {
	return (
		<div
			className={"mt-80 relative bg-pos-y-center bg-size-cover flex justify-center items-center radius-25"}
			style={{
				height: 220,
				backgroundImage: `url(${image})`,
			}}>
			<div className={"absolute inset-0 bg-black opacity-30 z-0 radius-25"}></div>
			<h1 className={"text-white text-48 font-500 z-1"}>Chez vous, partout et ailleurs</h1>
		</div>
	)
}
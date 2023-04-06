import className from './index.module.css'

export default function Spinner() {
	return (
		<div className={"w-full h-full flex justify-center items-center"}>
			<div className={className.spinner}/>
		</div>
	)
}
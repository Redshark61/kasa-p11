interface Props {
	tags: string[]
	className?: string
}

export default function Tags({tags, className}: Props) {
	return (
		<div className={"flex flex-wrap mt-20"}>
			{tags.map(tag => (
				<span
					key={tag}
					className={`${className} bg-primary flex justify-center items-center text-white text-14 font-300 px-30 py-5 radius-10 mr-10 mb-10`}
				>
					{tag}
				</span>
			))}
		</div>
	)
}
interface Props {
	tags: string[]
}

export default function Tags({tags}: Props) {
	return (
		<div className={"flex flex-wrap"}>
			{tags.map(tag => (
				<span
					key={tag}
					className={"bg-primary text-white text-12 font-300 px-10 py-5 rounded-full mr-10 mb-10"}
				>
					{tag}
				</span>
			))}
		</div>
	)
}
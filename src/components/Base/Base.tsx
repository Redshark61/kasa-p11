export default function Base({children}: { children: React.ReactNode }) {
	return (
		<div className={"mx-100"}>
			{children}
		</div>
	)
}
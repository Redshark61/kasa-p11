import Nav from "../Nav";
import Footer from "../Footer";

export default function Base({children}: { children: React.ReactNode }) {
	return (
		<div className={"flex flex-col h-full justify-between"}>
			<div className={"mx-100"}>
				<Nav/>
				{children}
			</div>
			<Footer/>
		</div>
	)
}
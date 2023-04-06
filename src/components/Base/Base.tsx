import Nav from "../Nav";
import Footer from "../Footer";
import {Outlet} from "react-router-dom";

export default function Base() {
	return (
		<div className={"flex flex-col h-full justify-between"}>
			<div className={"mx-100"}>
				<Nav/>
				<Outlet/>
			</div>
			<Footer/>
		</div>
	)
}
import about from '/about.png'
import Hero from "../../components/Hero";
import {ABOUT} from "../../constants";
import Dropdown from "../../components/Dropdpown";

export default function About() {
	return (
		<div>
			<Hero image={about}/>
			{ABOUT.map((item, index) => (
				<Dropdown key={item.title} title={item.title} className={"mt-30 mx-100"}>
					<p className={"text-18"}>{item.text}</p>
				</Dropdown>
			))}
		</div>
	);
}
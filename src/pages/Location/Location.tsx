import {useParams} from "react-router-dom";
import LocationData from "../../data/logements.json";
import Carousel from "../../components/Carousel";
import Tags from "../../components/Tags";
import Dropdown from "../../components/Dropdpown";
import Error404 from "../404";

export default function Location() {
	const {id} = useParams<{ id: string }>()
	const location = LocationData.find(location => location.id === id)

	if (!location) {
		return <Error404/>
	}

	return (
		<>
			<Carousel pictures={location.pictures}/>
			<h1 className={"font-300 text-36 text-primary mt-30"}>{location.title}</h1>
			<h2 className={"font-300 text-18 text-primary"}>{location.location}</h2>
			<Tags tags={location.tags}/>
			<div className={"flex gap-80 mt-25"}>
				<Dropdown title={"Description"} className={"w-half"}>
					<p style={{lineHeight: "25px"}}>{location.description}</p>
				</Dropdown>
				<Dropdown title={"Équipements"} className={"w-half"}>
					<ul style={{lineHeight: "25px"}}>
						{location.equipments.map(equipment => (
							<li className={"list-none"} key={equipment}>{equipment}</li>
						))}
					</ul>
				</Dropdown>
			</div>
		</>
	)
}
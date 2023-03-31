import {useParams} from "react-router-dom";
import LocationData from "../../data/logements.json";
import Carousel from "../../components/Carousel";
import Tags from "../../components/Tags";

export default function Location() {
	const {id} = useParams<{ id: string }>()
	const location = LocationData.find(location => location.id === id)

	if (!location) {
		return <p>Location not found</p>
	}

	return (
		<>
			<Carousel pictures={location.pictures}/>
			<h1 className={"font-300 text-36 text-primary mt-30"}>{location.title}</h1>
			<h2 className={"font-300 text-18 text-primary"}>{location.location}</h2>
			<Tags tags={location.tags}/>
		</>
	)
}
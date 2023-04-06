import {useParams} from "react-router-dom";
import LocationData from "../../data/logements.json";
import Carousel from "../../components/Carousel";
import Tags from "../../components/Tags";
import Dropdown from "../../components/Dropdpown";
import Error404 from "../404";
import Rating from "../../components/Rating";
import ProfileThumbnail from "../../components/ProfileThumbnail";
import className from './index.module.css'

export default function Location() {
	const {id} = useParams<{ id: string }>()
	const location = LocationData.find(location => location.id === id)
	if (!location) {
		return <Error404/>
	}

	return (
		<>
			<Carousel pictures={location.pictures}/>
			<div className={`flex justify-between mt-30 ${className.description}`}>
				<div>
					<h1 className={"font-300 text-36 text-primary"}>{location.title}</h1>
					<h2 className={"font-300 text-18 text-primary"}>{location.location}</h2>
					<Tags className={className.tags} tags={location.tags}/>
				</div>
				<div className={className.host_information}>
					<div className={'flex items-center text-primary mb-30'}>
						<h3 className={"text-18 font-500 mr-10"}>{location.host.name}</h3>
						<ProfileThumbnail minSize={"32px"} size={"4.4vw"} url={location.host.picture}
										  alt={location.host.name}/>
					</div>
					<Rating value={location.rating}/>
				</div>
			</div>
			<div className={`${className.dropdown_container} flex gap-80 mt-25`}>
				<Dropdown title={"Description"} className={`w-half`}>
					<p className={"text-18"} style={{lineHeight: "max(17px, 1.7vw)"}}>{location.description}</p>
				</Dropdown>
				<Dropdown title={"Équipements"} className={`w-half`}>
					<ul style={{lineHeight: "max(17px, 1.7vw)"}}>
						{location.equipments.map(equipment => (
							<li className={"list-none text-18"} key={equipment}>{equipment}</li>
						))}
					</ul>
				</Dropdown>
			</div>
		</>
	)
}
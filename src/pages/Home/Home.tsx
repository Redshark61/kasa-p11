import Hero from "../../components/Hero";
import Locations from "../../components/Locations";
import image from '/hero.png'
import {useLoaderData} from "react-router-dom";
import {LocationType} from "../../types";

export default function Home() {
	const data = useLoaderData() as LocationType[]
	return (
		<div>
			<Hero text={"Chez vous, partout et ailleurs"} image={image}/>
			<Locations locationData={data}/>
		</div>
	)
}
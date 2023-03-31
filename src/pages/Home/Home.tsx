import Hero from "../../components/Hero";
import Locations from "../../components/Locations";
import image from '/hero.png'

export default function Home() {
	return (
		<div>
			<Hero text={"Chez vous, partout et ailleurs"} image={image}/>
			<Locations/>
		</div>
	)
}
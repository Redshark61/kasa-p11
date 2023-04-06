import React from "react";
// import LocationData from "../../data/logements.json";
import {LocationType} from "../../types";
import Card from "../Card";
import {Link} from "react-router-dom";
import className from './index.module.css';

interface Props {
	locationData: LocationType[]
}

export default function Locations({locationData}: Props) {
	return (
		<div
			className={`mt-40 radius-25 flex gap-50 ${className.card}`}>
			{locationData.map((location: LocationType) => {
				return (
					<Link key={location.id} to={`/location/${location.id}`} style={{textDecoration: 'none'}}>
						<Card title={location.title} image={location.pictures[0]}/>
					</Link>
				)
			})}
		</div>
	)
}
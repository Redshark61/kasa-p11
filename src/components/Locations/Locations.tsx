import React from "react";
import LocationData from "../../data/logements.json";
import {LocationType} from "../../types";
import Card from "../Card";
import {Link} from "react-router-dom";

export default function Locations() {
	return (
		<div style={{backgroundColor: "#F6F6F6", paddingTop: 55}}
			 className={"mt-40 radius-25 flex flex-wrap px-50 gap-50"}>
			{LocationData.map((location: LocationType) => {
				return (
					<Link key={location.id} to={`/location/${location.id}`} style={{textDecoration: 'none'}}>
						<Card title={location.title} image={location.pictures[0]}/>
					</Link>
				)
			})}
		</div>
	)
}
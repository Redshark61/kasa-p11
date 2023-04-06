import {LocationType} from "../types";

export async function loadJSON(): Promise<LocationType[]> {
	const response = await fetch("/logements.json")
	return await response.json()
}
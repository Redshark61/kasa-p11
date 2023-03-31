import {Link} from "react-router-dom";
import {LINKS} from "../../constants";

export default function Error404() {
	return (
		<div className={"text-primary flex justify-center items-center flex-col"}>
			<h1 style={{fontSize: 288}}>404</h1>
			<h2 className={"text-36 font-500"}>Oups ! La page que vous demander n'existe pas.</h2>
			<Link to={LINKS.home.to} className={"text-18 font-500"} style={{marginTop: 180}}>Retourner sur la page
				d'accueil</Link>
		</div>
	);
}
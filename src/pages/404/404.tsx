import {Link} from "react-router-dom";
import {LINKS} from "../../constants";
import className from './index.module.css'

export default function Error404() {
	return (
		<div className={`${className.error404} text-primary flex justify-center items-center flex-col h-full`}>
			<h1 style={{fontSize: "20vw"}}>404</h1>
			<h2 className={"text-36 font-500 text-center"}>Oups ! La page que vous demander n'existe pas.</h2>
			<Link to={LINKS.home.to} className={"text-18 font-500"}>Retourner sur la page
				d'accueil</Link>
		</div>
	);
}
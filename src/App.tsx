import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Base from "./components/Base";
import {LINKS} from "./constants";
import Location from "./pages/Location";
import Error404 from "./pages/404";
import About from "./pages/About";

function App() {

	return (
		<Base>
			<Routes>
				<Route path={LINKS.home.to} element={<Home/>}/>
				<Route path={LINKS.location.to} element={<Location/>}/>
				<Route path={LINKS.about.to} element={<About/>}/>
				<Route path={"*"} element={<Error404/>}/>
			</Routes>
		</Base>
	)
}

export default App

import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Base from "./components/Base";
import Nav from "./components/Nav";
import {LINKS} from "./constants";
import Location from "./pages/Location";

function App() {

	return (
		<Base>
			<Nav>
				<Routes>
					<Route path={LINKS.home.to} element={<Home/>}/>
					<Route path={LINKS.location.to} element={<Location/>}/>
				</Routes>
			</Nav>
		</Base>
	)
}

export default App
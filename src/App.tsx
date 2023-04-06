import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import Base from "./components/Base";
import {LINKS} from "./constants";
import Location from "./pages/Location";
import Error404 from "./pages/404";
import About from "./pages/About";
import {loadJSON} from "./utils";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={LINKS.home.to} element={<Base/>}>
			<Route index element={<Home/>} loader={loadJSON}/>
			<Route index path={LINKS.location.to} element={<Location/>} loader={loadJSON}/>
			<Route index path={LINKS.about.to} element={<About/>}/>
			<Route path={"*"} element={<Error404/>}/>
		</Route>
	)
)

function App() {

	return (
		<RouterProvider router={router}/>
	)
}

export default App

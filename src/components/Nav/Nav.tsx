import React from "react";
import logo from "/LOGO.svg";
import {LINKS} from "../../constants";
import {NavLink} from "react-router-dom";
import className from './index.module.css'

interface Props {
	children?: React.ReactNode
}

export default function Nav({children = undefined}: Props) {
	return (
		<>
			<nav className={`${className.nav} flex justify-between py-40`}>
				<NavLink to={LINKS.home.to}>
					<img src={logo} alt="logo" className={"w-210"}/>
				</NavLink>
				<ul className={"text-primary flex justify-between items-center w-250"}>
					{Object.values(LINKS).map(({to, text, noNavBar}) => (
						!noNavBar && (<li key={to} className={"list-none"}>
							<NavLink to={to} className={"text-18"} style={
								({isActive}) => ({
									textDecoration: isActive ? "underline" : "none"
								})
							}>{text}</NavLink>
						</li>)
					))}
				</ul>
			</nav>
			{children}
		</>
	)
}
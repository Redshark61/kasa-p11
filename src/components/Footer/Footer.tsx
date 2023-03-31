import React from "react";
import logo from '/LOGO_black.svg'

export default function Footer({children}: { children?: React.ReactNode }) {
	return (
		<>
			{children}
			<footer className="bg-black text-white gap-30 py-30 flex justify-center items-center flex-col mt-70">
				<img src={logo} alt="logo" className="w-120"/>
				<p className={"text-24"}>
					© 2020 Kasa. All rights reserved.
				</p>
			</footer>
		</>
	)
}
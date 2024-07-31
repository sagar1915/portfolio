import hamburger from "../assets/hamburger-menu-svgrepo-com.svg";
import NavItems from "./NavItems";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const NavBar = () => {
	const [hidden, setHidden] = useState(true);

	const animate = {
		layout: "position",
		animate: {
			opacity: 1,
		},
		transition: {
			duration: 0.5,
		},
		initial: { opacity: 0 },
		exit: {
			opacity: 0,
		},
	};
	
	return (
		<div className="z-10">
			<div className="backdrop-blur-sm flex items-center py-6 px-5 md:px-0">
				<a href="#" className="font-bold text-2xl">
					S
				</a>
				<div className="ml-auto">
					<div className="md:hidden">
						<button
							onClick={() => setHidden(!hidden)}
							className="bg-white p-1 rounded-full "
						>
							<img src={hamburger} className="size-8" alt="" />
						</button>
					</div>
					<ul className="md:flex justify-end gap-x-10 hidden">
						<li className="">
							<a href="#skills"> Skills</a>
						</li>
						<li className="">
							<a href="#projects"> Projects</a>
						</li>
						<li className="">
							<a href="#contacts"> Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<AnimatePresence mode="popLayout">
				{hidden && (
					<motion.div {...animate}>
						<NavItems />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default NavBar;

import { motion } from "framer-motion";
const NavItems = () => {
	return (
		<motion.div className="-z-1 md:hidden">
			<ul className="bg-slate-800 *:p-2 ">
				<li>Skills</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</motion.div>
	);
};

export default NavItems;

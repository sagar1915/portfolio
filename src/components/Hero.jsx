import pic from "../assets/file.png";
import { motion } from "framer-motion";
const Hero = () => {
	return (
		<motion.div layout className="md:flex py-20">
			<div className="md:w-1/3 content-center md:order-1">
				<img
					src={pic}
					className="rounded-full size-[250px] mx-auto "
					alt="profile pic"
				/>
			</div>

			<div className="md:w-2/3 pt-4 md:p-0">
				<h1 className="text-4xl md:text-6xl text-center md:text-start pb-6 ">
					<span className=" bg-gradient-to-br from-red-400 bg-clip-text">
						Chinthakindi Sagar
					</span>
				</h1>
				<p className="text-justify">
					Passionate React Developer with 2 years of experience in developing
					user interfaces and web applications. Proficient in frontend
					technologies including React, Redux, and JavaScript ES6. Seeking to
					leverage skills and experience to contribute to innovative projects in
					a dynamic team environment.
				</p>
			</div>
		</motion.div>
	);
};

export default Hero;

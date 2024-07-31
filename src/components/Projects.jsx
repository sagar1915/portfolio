import youtube from "../assets/Youtube.png";
import netflix from "../assets/netflix.png";
import react from "../assets/reactjs.svg";
import redux from "../assets/redux.svg";
import tailwind from "../assets/tailwind.svg";

const Projects = () => {
	return (
		<div className="pb-20" id="projects">
			<h1 className="text-center text-4xl py-10">Projects</h1>
			<div className="flex flex-wrap gap-6">
				<div className="md:flex items-center w-full bg-black rounded-xl overflow-hidden">
					<div className="md:w-2/3 px-5 py-3">
						<img
							src={youtube}
							className="rounded-lg hover:scale-105 duration-500 ease-in-out"
							alt=""
						/>
					</div>

					<div className="md:w-1/3 p-3">
						<h1 className="font-bold text-2xl">YouTube Clone</h1>
						<a className="" href="">
							Site link{" "}
						</a>
						<p className="text-sm py-5">
							A full fledged youtube clone using reactjs redux toolkit and fetch
							api users can login and watch youtube videos{" "}
						</p>
						<div className="">
							<p className="font-bold">Technologies used</p>
							<div className="flex gap-x-6 pt-2">
								<img src={react} className="size-10" alt="" />
								<img src={redux} className="size-10" alt="" />
								<img src={tailwind} className="size-10" alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className="w-full bg-black rounded-xl md:flex items-center overflow-hidden">
					<div className="md:w-2/3 px-5 py-3 md:order-1">
						<img
							src={netflix}
							className="rounded-lg hover:scale-105 duration-500"
							alt=""
						/>
					</div>
					<div className="md:w-1/3 p-3">
						<h1 className="font-bold text-2xl">Netflix Clone</h1>
						<a className="" href="">
							Site link{" "}
						</a>
						<p className="text-sm py-5">
							A full fledged Netflix clone using reactjs, redux toolkit,
							Tailwind and fetch api users can login and watch youtube videos{" "}
						</p>
						<div className="">
							<p className="font-bold">Technologies used</p>
							<div className="flex gap-x-6 pt-2">
								<img src={react} className="size-10" alt="" />
								<img src={redux} className="size-10" alt="" />
								<img src={tailwind} className="size-10" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

import js from "../assets/javascript.svg";
import react from "../assets/reactjs.svg";
import redux from "../assets/redux.svg";
import tailwind from "../assets/tailwind.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";

const Skills = () => {
	return (
		<div className="pb-20" id="skills">
			<h1 className="text-center text-4xl py-10">My Skills</h1>
			<div className="flex flex-wrap justify-center items-center text-center  gap-6">
				<div className="p-10 bg-slate-500 rounded-lg hover:scale-105 ease-in-out duration-500">
					<img className="size-20" src={js} alt="" />
					<p className="">Javascript</p>
				</div>

				<div className="p-10  bg-slate-500 rounded-lg box-border hover:scale-105 ease-in-out duration-500">
					<img className="size-20" src={react} alt="" />
					<p className="">React</p>
				</div>
				<div className="p-10 bg-slate-500 rounded-lg box-border hover:scale-105 ease-in-out duration-500">
					<img className="size-20" src={redux} alt="" />
					<p className="">Redux</p>
				</div>
				<div className="p-10 bg-slate-500 rounded-lg box-border hover:scale-105 ease-in-out duration-500">
					<img className="size-20" src={tailwind} alt="" />
					<p className="">Tailwind</p>
				</div>
				<div className="p-10 bg-slate-500 rounded-lg box-border hover:scale-105 ease-in-out duration-500">
					<img className="size-20" src={git} alt="" />
					<p className="">GIT</p>
				</div>
				<div className="p-10 bg-slate-500 rounded-lg box-border hover:scale-105 ease-in-out duration-500">
					<img className="size-20" src={github} alt="" />
					<p className="">Github</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;

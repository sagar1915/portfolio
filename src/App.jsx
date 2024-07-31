import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<div className="w-screen z-[-2] h-screen fixed bg-gradient-to-b from-black via-gray-600 to-slate-700"></div>
			<div className="container mx-auto text-white font-mono px-5 ">
				<NavBar />
				<Hero />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</>
	);
}

export default App;

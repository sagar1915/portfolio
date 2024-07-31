import mail from "../assets/mail.svg";
import git from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Contact = () => {
	return (
		<div className="pb-20" id="contacts">
			<div className="">
				<h1 className="text-center text-4xl py-10">Contact Me</h1>
			</div>

			<div className="md:flex">
				<div className="md:w-1/2 *:py-3 px-3 md:text-start text-center">
					<h1 className="text-2xl font-bold">Drop me a message</h1>
					<p>
						My inbox is always open for new opportunities. Feel free to contact
						me for any inquries you may have!
					</p>
					<div className="text-center md:text-start">
						<ul className="*:py-2 inline-block">
							<li className="flex items-center ">
								<img className="size-8" src={mail} alt="email" />
								<a className="pl-2" href="">
									sagar192010@gmail.com
								</a>
							</li>
							<li className="flex items-center">
								<img className="size-8" src={git} alt="" />
								<a target="_blank"
									className="pl-2" href="https://github.com/sagar1915">
									github.com/sagar1915
								</a>
							</li>
							<li className="flex items-center">
								<img className="size-8" src={linkedin} alt="" />
								<a
									target="_blank"
									className="pl-2"
									href="https://www.linkedin.com/in/sagar-ch-68015717a/"
								>
									www.linkedin.com/in/sagar-ch
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="md:w-1/2 px-3 flex justify-center items-center">
					<form action="" className="inline-block md:w-2/3">
						<label htmlFor="" className="">
							{" "}
							Name
						</label>
						<br />

						<input
							type="text"
							className="border bg-inherit rounded-md p-1.5 w-full"
						/>
						<br />

						<label htmlFor="" className="">
							{" "}
							Subject
						</label>
						<br />

						<input
							type="text"
							className="border bg-inherit rounded-md p-1.5 w-full "
						/>
						<br />

						<label htmlFor="" className="">
							{" "}
							Message
						</label>
						<br />

						<textarea
							className="border bg-inherit rounded-md p-1.5 w-full "
							name=""
							id=""
						></textarea>
						<br />
						<button className="border bg-slate-900 rounded-md px-10 py-1.5 w-full">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

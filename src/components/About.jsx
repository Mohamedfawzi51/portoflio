import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>

				<p className="text-xl mt-5">
					I’m a Web Developer with 5 years of experience in both frontend and
					backend development. Passionate about learning new technologies and
					building high-quality, user-focused web solutions.
				</p>

				<br />

				<p className="text-xl">
					I’ve worked with companies like London Eyes, Shazel, and Hogozat,
					creating modern, responsive, and efficient websites. Let’s collaborate
					to turn your ideas into powerful digital products! <br /> <br />
					I value minimalistic designs, thoughtful branding of the content, and
					customer relatable experience. Let’s discover together how we can make
					your project convert better!
					<br /> <br />I enjoy creating or redesigning a distinct identity for a
					product or service, get more traffic from search engine and social
					platforms.
				</p>
			</div>
		</div>
	);
};

export default About;

import React from "react";
import lumina from "../assets/portfolio/lumina.png";
import clinic from "../assets/portfolio/clinic.png";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import taraf from "../assets/portfolio/taraf.png";
import estate from "../assets/portfolio/real-estate.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: lumina,
      link: 'https://lumina-tech-seven.vercel.app/',
      repo: 'https://github.com/Mohamedfawzi51/lumina-tech'
    },
    {
      id: 2,
      src: taraf,
      link: 'https://taraf-eta.vercel.app/',
      repo: 'https://github.com/Mohamedfawzi51/Taraf'
    },
    {
      id: 3,
      src: clinic,
      link: 'https://clinic-app-nine-zeta.vercel.app/',
      repo: 'https://github.com/Mohamedfawzi51/clinic-app'
    },
    {
      id: 4,
      src: estate,
      link: 'https://real-estate-app-sandy-ten.vercel.app/ar',
      repo: 'https://github.com/Mohamedfawzi51/real-estate-app'
    },
    {
      id: 5,
      src: nftportal,
      link: 'https://nftportalbyrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/NFT-Portal'
    },
    {
      id: 6,
      src: iptracker,
      link: 'https://trackmyip.netlify.app/',
      repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 object-cover h-48 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

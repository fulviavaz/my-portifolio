import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-wrap justify-center items-center pt-20 pb-20 container mx-auto "
    >
      <div className="flex flex-wrap flex-col justify-center items-center text-left w-2/5">
        <h2 className="font-bold text-xl lg:text-4xl text-gray-800 leading-tight">
          Main Projects
        </h2>
        {/* projects */}
        <div className="flex flex-wrap justify-center items-center  bg-gray-300 rounded-3xl mt-6 w-auto h-auto p-11 ">
          <div className="flex flex-col justify-start items-start mr-10 ">
            <h3 className="md:text-xl text-gray-800 font-bold w-48">
              Hospital Amaral Carvalho
            </h3>
            <p className="font-inter text-sm md:text-lg mt-2 text-gray-600 w-72">
              Website developed for Amaral Carvalho Hospital. Using HTML, CSS,
              Javascript and Webflow with Finsweet library as CMS.
            </p>
            <div>
              <Button
                className="bg-slate-950 text-white rounded-xl text-lg hover:text-slate-950 hover:bg-white p-6 mt-6"
                asChild
              >
                <Link href="https://www.amaralcarvalho.org.br/" target="_blank">
                  View Project
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-start w-96 mt-6">
            <Image
              className="rounded-2xl hover:scale-105 transition-all"
              src="/amaral.jpg"
              width={430}
              height={350}
              alt="project1"
            />
          </div>
        </div>

        <div className="flex  flex-wrap justify-center items-cente  bg-gray-300 rounded-3xl mt-6 w-auto h-auto p-11">
          <div className="flex justify-center items-start w-96 mr-10 mb-6 ">
            <Image
              className="rounded-2xl hover:scale-105 transition-all"
              src="/pontoe.png"
              width={430}
              height={350}
              alt="project2"
            />
          </div>
          <div className="flex flex-col justify-start items-start ">
            <h3 className="md:text-xl text-gray-800 font-bold w-48">PontoE</h3>
            <p className="font-inter text-sm md:text-lg mt-2 text-gray-600 w-72">
              Website developed for PontoE StartUp. Using HTML, CSS, Javascript
              and Webflow with Finsweet library as CMS.
            </p>
            <div>
              <Button
                className="bg-slate-950 text-white rounded-xl text-lg hover:text-slate-950 hover:bg-white p-6 mt-6"
                asChild
              >
                <Link href="https://www.pontoe.net/" target="_blank">
                  View Project
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-cente  bg-gray-300 rounded-3xl mt-6 w-auto h-80 p-11">
          <div className="flex flex-col justify-start items-start mr-10 ">
            <h3 className="md:text-xl text-gray-800 font-bold w-48">
              Health4All
            </h3>
            <p className="font-inter text-sm md:text-lg mt-2 text-gray-600 w-72">
              Website developed for Health4All. Using HTML, CSS, Javascript and
              Webflow with Finsweet library as CMS.
            </p>
            <div>
              <Button
                className="bg-slate-950 text-white rounded-xl text-lg hover:text-slate-950 hover:bg-white p-6 mt-6"
                asChild
              >
                <Link href="https://www.health4all.com.pt/" target="_blank">
                  View Project
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-start w-96">
            <Image
              className="rounded-2xl hover:scale-105 transition-all"
              src="/helth.png"
              width={430}
              height={350}
              alt="project3"
            />
          </div>
        </div>

        <div className="flex justify-center items-cente  bg-gray-300 rounded-3xl mt-6 w-auto h-80 p-11">
          <div className="flex justify-center items-start w-96 mr-10 ">
            <Image
              className="rounded-2xl hover:scale-105 transition-all"
              src="/kingburger.jpg"
              width={430}
              height={350}
              alt="project2"
            />
          </div>
          <div className="flex flex-col justify-start items-start ">
            <h3 className="md:text-xl text-gray-800 font-bold w-48">
              King Burger
            </h3>
            <p className="font-inter text-sm md:text-lg mt-2 text-gray-600 w-72">
              Website developed for a fictional restaurant. Using React.JS,
              TypeScript, CSS modules, SCSS, React Hooks and Rest APIs.
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-slate-950 text-white rounded-xl text-lg hover:text-slate-950 hover:bg-white p-6 mt-6 mr-6"
                asChild
              >
                <Link
                  href="https://king-burger-react.vercel.app/"
                  target="_blank"
                >
                  View Project
                </Link>
              </Button>

              <Button
                className="bg-slate-950 text-white rounded-xl text-lg hover:text-slate-950 hover:bg-white p-6 mt-6"
                asChild
              >
                <Link
                  href="https://github.com/fulviavaz/king-burger-react"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Button
          className="bg-slate-950 text-white rounded-xl text-lg hover:text-slate-950 hover:bg-white p-6 mt-6"
          asChild
        >
          <Link href="https://github.com/fulviavaz" target="_blank">
            More Projects
          </Link>
        </Button>
      </div>
    </section>
  );
}

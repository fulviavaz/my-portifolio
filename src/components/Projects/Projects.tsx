"use client"
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto flex flex-wrap items-center justify-center lg:py-10 lg:px-32 py-10 px-10 "
    >
      <div className="flex flex-col justify-center items-center gap-11">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl lg:text-4xl text-gray-800 leading-tight"
        >
          Main Projects
        </motion.h2>

        {/* projects */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center  bg-gray-300 rounded-3xl lg:mt-6 w-auto h-auto lg:p-11 p-8"
        >
          <div className="flex flex-col justify-start items-start lg:mr-10 ">
            <h3 className="md:text-xl text-gray-800 font-bold lg:w-48 w-auto">
              Hospital Amaral Carvalho
            </h3>
            <p className="font-inter text-sm md:text-lg mt-2 text-gray-600 lg:w-72 w-auto">
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
          <div className="flex justify-center items-start lg:w-96 mt-6">
            <Image
              className="rounded-2xl hover:scale-105 transition-all"
              src="/amaral.jpg"
              width={430}
              height={350}
              alt="project1"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center  bg-gray-300 rounded-3xl lg:mt-6 w-auto h-auto lg:p-11 p-8"
        >
          <div className="flex flex-col justify-start items-start lg:mr-10 ">
            <h3 className="md:text-xl text-gray-800 font-bold lg:w-48 w-auto">
              PontoE
            </h3>
            <p className="font-inter text-sm md:text-lg mt-2 text-gray-600 lg:w-72 w-auto">
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
          <div className="flex justify-center items-start lg:w-96 mt-6">
            <Image
              className="rounded-2xl hover:scale-105 transition-all"
              src="/pontoe.png"
              width={430}
              height={350}
              alt="project1"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center  bg-gray-300 rounded-3xl lg:mt-6 w-auto h-auto lg:p-11 p-8"
        >
          <div className="flex flex-col justify-start items-start lg:mr-10 ">
            <h3 className="md:text-xl text-gray-800 font-bold lg:w-48 w-auto">
              Health4All
            </h3>
            <p className="font-inter text-sm md:text-lg mt-2 text-gray-600 lg:w-72 w-auto">
              Landing Page developed for Health4All. Using HTML, CSS, Javascript
              and Webflow with Finsweet library as CMS.
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
          <div className="flex justify-center items-start lg:w-96 mt-6">
            <Image
              className="rounded-2xl hover:scale-105 transition-all"
              src="/helth.png"
              width={430}
              height={350}
              alt="project1"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center  bg-gray-300 rounded-3xl lg:mt-6 w-auto h-auto lg:p-11 p-8"
        >
          <div className="flex flex-col justify-start items-start lg:mr-10 ">
            <h3 className="md:text-xl text-gray-800 font-bold lg:w-48 w-auto">
              King Burger
            </h3>
            <p className="font-inter text-sm md:text-lg mt-2 text-gray-600 lg:w-72 w-auto">
              Website developed for a fictional restaurant. Using React.JS,
              TypeScript, CSS modules, SCSS, React Hooks and Rest APIs.
            </p>
            <div>
              <Button
                className="bg-slate-950 text-white rounded-xl text-lg hover:text-slate-950 hover:bg-white p-6 mt-6"
                asChild
              >
                <Link
                  href="https://king-burger-react.vercel.app/"
                  target="_blank"
                >
                  View Project
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-start lg:w-96 mt-6">
            <Image
              className="rounded-2xl hover:scale-105 transition-all"
              src="/kingburger.jpg"
              width={430}
              height={350}
              alt="project1"
            />
          </div>
        </motion.div>

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

"use client"
import React from 'react'
import Typing from '../Typing/Typing';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Inicio() {
    return (
      <section id="home" className="flex justify-center items-center align-middle w-full h-screen">
        <div className="flex flex-col justify-center items-start text-left w-3/5">
          <p className="text-gray-800 font-extrabold text-xl lg:text-3xl mb-2">
            Hello World!
          </p>
          <Typing />
          <p className="font-inter text-lg text-gray-600 mt-6 w-auto">
            Welcome to my portfolio! Here you will discover my knowledge in
            Front-end development, as well as incredible projects and relevant
            publications. Feel free to explore and let’s create solutions
            together that will surprise you!
          </p>
          <div className="flex mt-6">
            <Button
              variant={"default"}
              className="mr-4 bg-slate-950 text-white rounded-xl text-xl hover:text-slate-950 hover:bg-white p-8"
            >
              Contact
            </Button>
            <Button
              variant={"default"}
              className="mr-4 bg-gray-400 text-white rounded-xl text-xl hover:text-slate-950 hover:bg-white p-8"
            >
              Download CV
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            className="animate-bounce-slow"
            src="/avatar.png"
            width={350}
            height={350}
            alt="avatar"
          />
        </div>
      </section>
    );
}

import React from 'react'
import { TypeAnimation } from "react-type-animation";

export default function Typing() {
    return (
      <div className="text-gray-800 font-extrabold text-3xl md:text-3xl xl:text-4xl pr-1">
        <TypeAnimation
          sequence={[
            "I'm Fúlvia Vaz",
            1000,                         
          ]}
          wrapper="span"
          speed={25}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    );
}

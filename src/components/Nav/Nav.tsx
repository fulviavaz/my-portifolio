import React from 'react'

export default function Nav() {
    return (
      <nav className="flex justify-center items-center">
        <ul
          className="fixed bottom-8 hidden lg:flex justify-center items-center gap-x-4 px-10 h-20
        bg-gray-800 rounded-full bg-opacity-40 backdrop-blur-sm drop-shadow-lg z-20"
        >
          <li className="cursor-pointer rounded-full bg-transparent hover:bg-gray-800/40 transition-colors">
            <a
              href="#home"
              className="flex justify-center items-center w-14 h-14"
              aria-label="Go to section #home"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-2xl"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#experience"
              className="flex justify-center items-center w-14 h-14"
              aria-label="Go to section #experience"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-2xl"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <polyline
                  points="48 216 48 224 192 224"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#projects"
              className="flex justify-center items-center w-14 h-14"
              aria-label="Go to section #projects"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-2xl"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="64 88 16 128 64 168"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
                <polyline
                  points="192 88 240 128 192 168"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
                <line
                  x1="160"
                  y1="40"
                  x2="96"
                  y2="216"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#feedbacks"
              className="flex justify-center items-center w-14 h-14"
              aria-label="Go to section #feedbacks"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-2xl"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <circle cx="132" cy="128" r="12"></circle>
                <circle cx="84" cy="128" r="12"></circle>
                <circle cx="180" cy="128" r="12"></circle>
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#about"
              className="flex justify-center items-center w-14 h-14"
              aria-label="Go to section #about"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-2xl"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  cx="128"
                  cy="96"
                  r="64"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="16"
                ></circle>
                <path
                  d="M31,216a112,112,0,0,1,194,0"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#techs"
              className="flex justify-center items-center w-14 h-14"
              aria-label="Go to section #techs"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-2xl"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="88"
                  y1="232"
                  x2="168"
                  y2="232"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <path
                  d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <path
                  d="M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#contact"
              className="flex justify-center items-center w-14 h-14"
              aria-label="Go to section #contact"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-2xl"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <polyline
                  points="224 56 128 144 32 56"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    );
}

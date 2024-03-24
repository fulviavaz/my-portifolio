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
              className="flex justify-center items-center w-14 h-14 scroll-smooth"
              aria-label="Go to section #home"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#experience"
              className="flex justify-center items-center w-14 h-14 scroll-smooth"
              aria-label="Go to section #experience"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#projects"
              className="flex justify-center items-center w-14 h-14 scroll-smooth"
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
              href="#techs"
              className="flex justify-center items-center w-14 h-14 scroll-smooth"
              aria-label="Go to section #techs"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
            </a>
          </li>

          <li
            className="cursor-pointer rounded-full bg-transparent
        hover:bg-gray-800/40 transition-colors"
          >
            <a
              href="#contact"
              className="flex justify-center items-center w-14 h-14 scroll-smooth"
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

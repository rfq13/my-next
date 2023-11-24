import Image from "next/image";
export default function Header() {
  return (
    <div className="bg-gradient-to-b from-[#5c388e] to-transparent h-[250px] backdrop-blur-md w-full flex">
      <div className="flex items-center text-center justify-center mx-auto  px-8 lg:w-[65rem] w-full items-start align-top pb-[135px]">
        <button
          type="button"
          className="flex items-center rounded-lg px-3 py-2 text-sm  text-white shadow-sm h-[40px] justify-self-start mr-auto align-middle"
        >
          {/* upload icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-white font-light"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              className="text-white"
              d="M10.707 3.293a1 1 0 010 1.414L6.414 9H17a1 1 0 110 2H6.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
        <h1 className="text-xl text-white mr-auto font-semibold flex items-center">
          <Image
            className="text-transparent mr-2 bg-transparent rounded-full invert"
            src="/package.png"
            alt="Next.js Logo"
            width={25}
            height={25}
            priority
          />
          Product List
        </h1>
      </div>
    </div>
  );
}

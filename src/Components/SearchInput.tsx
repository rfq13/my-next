"use client";

import { useState } from "react";

export default function Input() {
  const initialState = {
    search: "",
    isFocused: false,
  };
  const [state, setState] = useState(initialState);
  return (
    <div className="py-2 w-[25%]">
      <div
        className={`relative border-[#333333] border-2 rounded-lg bg-[#1e1e1e] ${
          state.isFocused ? "border-[#5c388e]" : ""
        }`}
      >
        <input
          placeholder="search products"
          className="text-md block px-3 py-2 rounded-lg  bg-transparent placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:outline-none w-[90%]"
          value={state.search}
          onChange={(e) => setState({ ...state, search: e.target.value })}
          onFocus={() => setState({ ...state, isFocused: true })}
          onBlur={() => setState({ ...state, isFocused: false })}
        />
        <div
          className={`absolute bg-transparent inset-y-0 -right-2 pr-3 flex items-center text-sm leading-5 pointer-events-none ${
            !state.isFocused ? "text-[#5c388e]" : "text-gray-500"
          }`}
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

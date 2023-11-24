"use client";

import SearchInput from "@/Components/SearchInput";
import Header from "@/Components/Header";
import Image from "next/image";
import ProductCard from "@/Components/ProductCard";
import Modal from "@/Components/Modal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const categories = [
    "Cocktail",
    "Shooters",
    "Premium Spirits",
    "Non-Alcoholic Beverages",
  ];

  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    priceId: string;
    image: string;
    category: string;
    stock: number;
  }

  const RequiredIcon = () => <span className="text-red-500 font-bold">*</span>;

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Mojito",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      priceId: "NT$",
      image: "https://unsplash.it/400/400",
      category: "Cocktail",
      stock: 10,
    },
    {
      id: 2,
      name: "Mojito",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      priceId: "NT$",
      image: "https://unsplash.it/400/400",
      category: "Cocktail",
      stock: 10,
    },
    {
      id: 3,
      name: "Mojito",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      priceId: "NT$",
      image: "https://unsplash.it/400/400",
      category: "Cocktail",
      stock: 10,
    },
    {
      id: 4,
      name: "Mojito",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      priceId: "NT$",
      image: "https://unsplash.it/400/400",
      category: "Cocktail",
      stock: 10,
    },
    {
      id: 5,
      name: "Mojito",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      priceId: "NT$",
      image: "https://unsplash.it/400/400",
      category: "Cocktail",
      stock: 10,
    },
    {
      id: 6,
      name: "Mojito",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      priceId: "NT$",
      image: "https://unsplash.it/400/400",
      category: "Cocktail",
      stock: 10,
    },
  ]);

  const CustomModalContainer = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <div className="flex justify-center gap-3">
      {children}
      <div
        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none w-1/2 bg-gradient-to-r from-[#9f5ff9] to-[#c700cc] h-1/2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="p-5">
          <h3 className="text-xl font-semibold text-white">
            Looking for variant ?
          </h3>
          <p className="mt-4">
            Don’t worry!! <br />
            <br /> size, sugar level, ice level will be unlocked if you already
            approved by admin.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-between bg-[#171717] text-slate-50 w-full">
      <Header />
      <main
        className="min-h-screen px-24 w-[80%]"
        style={{
          marginTop: -100,
        }}
      >
        <div className="z-10 justify-between font-mono text-sm flex mb-[80px]">
          <SearchInput />
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-white px-3 py-2 text-sm  text-white shadow-sm ring-1 ring-inset ring-white hover:ring-gray-400
            h-[40px] w-[120px] z-10
            "
          >
            <Image
              className="relative invert mr-2"
              src="/upload.png"
              alt="Next.js Logo"
              width={20}
              height={20}
              priority
            />
            Import
          </button>
        </div>
        <div className="flex bg-[#1e1e1e] rounded-lg p-4 w-full items-center gap-4 mb-[20px]">
          <span>Category</span>
          <div className="flex gap-4 sm:overflow-x-auto overflow-x-scroll">
            {categories.map((ctg, i) => (
              <span
                key={`catg-${i}`}
                className="text-white border border-white rounded-lg px-3 py-2 text-sm hover:border-[#5c388e] cursor-pointer"
              >
                {ctg}
              </span>
            ))}
          </div>

          <Image
            className="relative invert mr-2"
            src="/pencil.png"
            alt="Next.js Logo"
            width={20}
            height={20}
            priority
          />
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
          {products.map((prd, i) => (
            <ProductCard
              key={`prod-${i}`}
              product={prd}
              onAddToCart={(product) => {
                console.log(product);
              }}
            />
          ))}
          <div
            className="flex flex-col justify-center bg-[#1e1e1e] rounded-lg p-4 w-full mb-4 text-center hover:shadow-lg transition duration-300 ease-in-out hover:drop-shadow-lg hover:opacity-90 min-h-[27rem]"
            onClick={() => setOpenModal(true)}
          >
            {/* icon plus */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                className="text-white"
                d="M10 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Product
          </div>
        </div>

        <Modal
          open={openModal}
          setOpen={setOpenModal}
          CustomContainer={CustomModalContainer}
          onOK={() => {
            setOpenModal(false);
          }}
          okButtonProps={{
            className:
              "text-white font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 rounded bg-gradient-to-r from-[#9f5ff9] to-[#c700cc] w-full",
            children: "Add Product",
          }}
        >
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Your product name
                </label>
                <input
                  className="appearance-none block w-full bg-transparent  border border-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#9747ff] bg-[#1a1919]"
                  id="grid-first-name"
                  type="text"
                  name="product_name"
                  // disable suggestion
                  autoComplete="off"
                  placeholder="product name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Menu Code
                </label>
                <input
                  className="appearance-none block w-full bg-transparent  border border-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#9747ff] bg-[#1a1919]"
                  id="grid-last-name"
                  type="text"
                  name="menu_code"
                  placeholder="Menu Code"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="w-full mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-ctg"
              >
                Category
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-transparent border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-[#9747ff] focus-within:border-[#9747ff] focus:bg-transparent"
                  id="grid-ctg"
                >
                  {categories.map((ctg, i) => (
                    <option className="text-black" key={`opt-catg-${i}`}>
                      {ctg}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9747ff]">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2 mt-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide  text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Tell me more about your product <RequiredIcon />
                </label>
                <textarea
                  className="appearance-none block w-full bg-transparent  border border-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#9747ff] bg-[#1a1919]"
                  id="grid-city"
                  name="description"
                  placeholder="Product Description"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2 mt-6 w-full">
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide  text-xs font-bold mb-2"
                  htmlFor="price"
                >
                  Price <RequiredIcon />
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white">
                    <span className="font-bold sm:text-sm">NT$</span>
                  </div>
                  <input
                    className="appearance-none block w-full bg-transparent  border border-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#9747ff] bg-[#1a1919] pl-12"
                    id="price"
                    name="price"
                    placeholder="Product Price"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide  text-xs font-bold mb-2"
                  htmlFor="disc-price"
                >
                  Discount Price (optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white">
                    <span className="font-bold sm:text-sm">NT$</span>
                  </div>
                  <input
                    className="appearance-none block w-full bg-transparent  border border-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#9747ff] bg-[#1a1919] pl-12"
                    id="disc-price"
                    name="price"
                    placeholder="Discount Price"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            {/* input file with icon on the right */}
            <div className="flex flex-wrap -mx-3 mb-2 mt-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide  text-xs font-bold mb-2"
                  htmlFor="upload-image"
                >
                  Upload your product image <RequiredIcon />
                </label>
                <div className="relative group">
                  <input
                    className="hidden"
                    id="upload-image"
                    name="image"
                    type="file"
                    placeholder="Product Image"
                    autoComplete="off"
                    accept="image/*"
                  />
                  <label
                    className="w-full flex appearance-none block w-full bg-transparent  border border-slate-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:border-[#9747ff] bg-[#1a1919] cursor-pointer"
                    htmlFor="upload-image"
                  >
                    <div className="flex justify-center gap-2">Select File</div>
                  </label>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-[#9747ff]">
                    {/* ?upload svg */}
                    <Image
                      className="relative group-hover:opacity-80"
                      src="/upload-purple.png"
                      alt="Next.js Logo"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal>
      </main>
    </div>
  );
}

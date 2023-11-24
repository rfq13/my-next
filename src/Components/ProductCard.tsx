"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

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

interface ProductCardProps {
  product: Product;
  onAddToCart: (clickedProduct: Product) => void;
}

export default function ProductCard(props: ProductCardProps) {
  const onAddToCart = () => {
    props.onAddToCart(props.product);
  };

  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.product.description.length > 100) {
      setDescription(props.product.description.substring(0, 97) + "...");
    } else {
      setDescription(props.product.description);
    }
  }, [props.product.description]);

  const isShowReadMore = useMemo(() => {
    console.log({
      length: description.length,
      slice: description.slice(-3),
    });
    return description.length === 100 && description.slice(-3) === "...";
  }, [description]);

  return (
    <div className="flex flex-col bg-[#1e1e1e] rounded-lg p-4 w-full mb-4 hover:shadow-lg transition duration-300 ease-in-out hover:drop-shadow-lg hover:opacity-90 h-[37rem]">
      <span className="text-white text-sm mb-2">
        {props.product.price} {props.product.priceId}
      </span>
      <Image
        className="relative invert rounded-lg"
        src={props.product.image}
        alt="Next.js Logo"
        width={400}
        height={400}
      />
      {/* header title with grdient from purple to pink */}
      <h1
        className="mt-2 text-xl bg-gradient-to-r from-[#a060fa] to-[#b400b8] text-transparent bg-clip-text font-bold overflow-ellipsis whitespace-nowrap max-w-xs"
        title={props.product.name}
      >
        {props.product.name.length > 29
          ? props.product.name.substring(0, 26) + "..."
          : props.product.name}
      </h1>

      <p className="text-white text-sm mt-2">
        <span>
          {description}
          {props.product.description.length > 100 && (
            <button
              onClick={() => {
                setDescription(
                  !isShowReadMore
                    ? props.product.description.substring(0, 97) + "..."
                    : props.product.description
                );
              }}
              className="text-white hover:underline ml-2 font-bold"
            >
              Read {!isShowReadMore ? "Less" : "More"}
            </button>
          )}
        </span>
      </p>

      <div className="mt-auto">
        <div className="flex justify-between items-center">
          <span>{props.product.stock}pcs</span>
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-white px-3 py-2 text-sm  text-white shadow-sm ring-1 ring-inset ring-white hover:ring-gray-400
            h-[40px] w-[120px] z-10 mt-4"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

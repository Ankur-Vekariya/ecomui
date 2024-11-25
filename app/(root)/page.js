"use client";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "@/redux/slice/cartSlice";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [productList, setProductList] = useState([]);
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("data-------------", data);
        setProductList(data.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // console.log("productList-------------", productList);

  return (
    <div className="pt-24 z-0 p-2">
      Home
      {/* <Button>Click me</Button> */}
      {/* <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 grid-cols-2">
        {productList.length > 0 &&
          productList.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

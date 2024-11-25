"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [productList, setProductList] = useState([]);
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
    <div>
      Home
      <Button>Click me</Button>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 grid-cols-2">
        {productList.length > 0 &&
          productList.map((product, index) => (
            <Card key={index} className="max-h-96">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex  w-full justify-center items-center">
                  <Image
                    src={product.images[0]}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                  />
                </div>
                <p className="truncate">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button>Add to cart</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}

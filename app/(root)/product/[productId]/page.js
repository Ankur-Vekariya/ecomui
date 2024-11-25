"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ProductDetail = ({ params }) => {
  const productId = React.use(params).productId;
  const path = usePathname();
  const [productDetail, setProductDetail] = useState(null);

  const getProductDetail = () => {
    fetch("https://dummyjson.com/products/" + productId)
      .then((res) => res.json())
      .then((data) => {
        console.log("data-------------", data);
        setProductDetail(data);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  console.log("productId===========", productId, productDetail);
  return (
    <div className="pt-24">
      {productDetail && (
        <Card className="w-full max-h-[50%] bg-gradient-to-r from-amber-400 to-red-400 rounded-3xl absolute shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>{path}</CardTitle>
            <h1 className="text-4xl">Product Detail</h1>
            <CardTitle>{path}</CardTitle>
          </CardHeader>
          <CardContent className="justify-self-center items-center rounded-3xl text-card-foreground w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-xl bg-white/30">
            <div className="p-10 gap-5 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              <div className="w-full flex flex-col gap-3">
                <h1 className="text-xl font-semibold">{productDetail.title}</h1>
                <p>{productDetail.description}</p>
                <div className="flex flex-row  gap-5 items-center ">
                  {productDetail.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      width={70}
                      height={70}
                      alt="Picture of the author"
                      className="rounded-xl  object-cover bg-gradient-to-r from-amber-400 to-red-400"
                    />
                  ))}
                </div>
                <p>${productDetail.price}</p>
              </div>
              <div className="w-full h-full  rounded-full bg-gradient-to-r from-amber-400 to-red-400">
                <Image
                  src={productDetail.thumbnail}
                  width={350}
                  height={350}
                  alt="Picture of the author"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-row  gap-5 items-center">
                  {productDetail.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                  ))}
                </div>
                <Button className="rounded-xl w-full text-black bg-gradient-to-r from-amber-400 to-red-400">
                  Add to cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductDetail;

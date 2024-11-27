"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { removeFromCart } from "@/redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.item);
  return (
    <div>
      Cart
      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 grid-cols-2">
        {cartItem.length > 0 &&
          cartItem.map((product, index) => (
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
                <Button onClick={() => dispatch(removeFromCart(product.id))}>
                  Remove from cart
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Cart;

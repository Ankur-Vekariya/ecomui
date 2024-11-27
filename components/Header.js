"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const cartItem = useSelector((state) => state.cart.item);
  const router = useRouter();

  // console.log("cartItem--------------", cartItem);
  return (
    <div className="fixed z-50 backdrop-blur-xl bg-white/30  w-full h-24">
      Header
      {cartItem.length > 0 && cartItem.length}
      {/* <Link href="/cart">Cart</Link> */}
      <Button onClick={() => router.push("/cart")}>Cart</Button>
    </div>
  );
};

export default Header;

import products from "@/data/products";
import axios from "axios";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

interface Props {
  products: typeof products;
}

function TestGetData({ products }: Props) {

  const [cart, setCart] = useState<any[]>([])
  useEffect(() => {
    console.log(products);
  }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") as string) || [])
  },[])

  const addToCart = (product: any) => {
    let cart: any[] = JSON.parse(localStorage.getItem("cart") as string) || [];
    const index = cart.findIndex((c) => c.id === product.id);
    if (index >= 0) {
      cart[index].quantity++;
    } else {
      cart = [...cart, { ...product, quantity: 1 }];
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart)
  };

  return (
    <>
      {/* <div>
        {products.map((p) => (
          <div key={p.id}>
            <h1>{p.name}</h1>
            <button onClick={() => addToCart(p)}>addTocart</button>
            <h1></h1>
          </div>
        ))}
      </div> */}
      <div>
        {cart.map((p) => (
          <div key={p.id}>
            <h1>{p.name}</h1>
            <button onClick={() => addToCart(p)}>addTocart</button>
            <h1>{p.quantity}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("http://localhost:3001/api/test-get-product");

  return {
    props: {
      products: res.data,
    },
  };
};

export default TestGetData;

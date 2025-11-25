"use client"
import React from 'react'
import Navbar from './navbar'
import { useCart } from './CartContext'

export default function ProductCard(props: any) {
    const {addToCart} = useCart()
  return (
    <>
            <Navbar />

            <div className="bg-white min-h-screen ">


                <div className="w-full flex justify-center pt-10 ">


                    <input
                        type="text"
                        placeholder="  Search for pizza..."
                        className="
        w-full
        max-w-[550px]
        bg-white
        text-black
        h-10 px-6 mt-4
        rounded-full
        outline-none
        border border-black
      "
                    />
                </div>
                <div className="">

                </div>


                {props.category === "vegetable" && (
                    <div className=" p-4 rounded-lg mb-6 ">
                        <h2 className="text-4xl font-bold text-black w-full mt-4">
                            Fresh fruits and Vegetables
                        </h2>

                        <div className="flex gap-4 mt-3">
                            <a
                                href="/category/vegetable"
                                className="px-4 py-2 bg-white text-black  border-2 rounded-3xl"
                            >
                                Vegetables
                            </a>

                            <a
                                href="/category/fruits"
                                className="px-4 py-2 bg-white text-black  border-2 rounded-3xl"
                            >
                                Fruits
                            </a>
                        </div>
                    </div>
                )}
                {props.category === "fruits" && (
                    <div className=" p-4 rounded-lg mb-6 mt-4">
                        <h2 className="text-4xl font-bold text-black  w-full mt-4">
                            Fresh fruits and Vegetables
                        </h2>

                        <div className="flex gap-4 mt-3">
                            <a
                                href="/category/vegetable"
                                className="px-4 py-2 bg-black text-white  border-2 rounded-3xl"
                            >
                                Vegetables
                            </a>

                            <a
                                href="/category/fruits"
                                className="px-4 py-2 bg-black text-white border-2 rounded-3xl"
                            >
                                Fruits
                            </a>
                        </div>
                    </div>
                )}
                {props.category === "bakery" && (
                    <div className="bg-white p-4 rounded-lg mb-6 ">
                        <h2 className="text-4xl font-bold text-black  w-full mt-4">
                            Fresh Bakery Products
                        </h2>



                    </div>
                )}
                {props.category === "eggs" && (
                    <div className="bg-white p-4 rounded-2xl mb-6 ">
                        <h2 className="text-4xl font-bold text-black w-full mt-4">
                            Fresh Eggs
                        </h2>



                    </div>

                )}


                {props.list.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    <div className="grid grid-cols-5  gap-4">
                        {props.list.map((item: any) => (
                            <div
                                key={item.id}
                                className="p-2 border-2 border-black rounded-4xl shadow ml-8 bg-white text-center"
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-60  object-contain mb-2"
                                />

                                <p className="font-semibold text-black">{item.name}</p>
                                <p className="text-gray-600 text-sm mt-1">₹{item.price}</p>
                                <button onClick={() => addToCart([{id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl, quantity: item.quantity}])} className="text-black px-4 py-2 bg-white  border-2 rounded-3xl mr-4">Add to cart</button>
                                <button className="text-black px-4 py-2 bg-white   border-2 rounded-3xl">Buy now</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
  )
}

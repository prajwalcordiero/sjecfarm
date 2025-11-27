"use client"
import SearchBar from './ui/SearchBar'
import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useRouter } from "next/navigation";

export default function ProductCard(props: any) {
    const { addToCart } = useCart();
    const router = useRouter();

    const [message, setMessage] = useState("");

    const handleBuyNow = (item: any) => {
        router.push(
            `/checkout?id=${item.id}&name=${item.name}&price=${item.price}&imageUrl=${item.imageUrl}`
        );
    };

    const handleAddToCart = (item: any) => {
        addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            imageUrl: item.imageUrl,
            quantity: 1,
        });
    };

    return (
        <>
            <div key={props.item.id}
                className="p-2 border-2 border-black rounded-4xl shadow ml-8 bg-white text-center"
            >
                <img
                    src={props.item.imageUrl}
                    alt={props.item.name}
                    className="w-full h-60 object-contain mb-2"
                />

                <p className="font-semibold text-black">{props.item.name}</p>
                <p className="text-gray-600 text-sm mt-1">₹{props.item.price}</p>

                <button
                    onClick={() => handleAddToCart(props.item)}
                    className="text-black px-4 py-2 bg-white border-2 rounded-3xl mr-4"
                >
                    Add to cart
                </button>

                <button
                    onClick={() => handleBuyNow(props.item)}
                    className="text-black px-4 py-2 bg-white border-2 rounded-3xl"
                >
                    Buy now
                </button>
            </div>
        </>
    );
}

"use client"
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/ui/SearchBar";
import { useParams } from "next/navigation";

export default function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = useParams();

    const products: Record<string, any[]> = {
        bakery: [
            {
                id: "1",
                name: "Pizza",
                description: "Fresh apple",
                price: 50,
                stock: 20,
                category: "bakery",
                imageUrl: "/pizza.avif",
                publicId: "apple_1",
                createdAt: null,
            },
            {
                id: "2",
                name: "Cookies",
                description: "Ripe banana",
                price: 30,
                stock: 25,
                category: "bakery",
                imageUrl: "/cookie.jpg",
                publicId: "banana_1",
                createdAt: null,
            },
            {
                id: "3",
                name: "Puffs",
                description: "Fresh apple",
                price: 50,
                stock: 20,
                category: "bakery",
                imageUrl: "/puff.jpg",
                publicId: "apple_1",
                createdAt: null,
            },
            {
                id: "4",
                name: "Choco Lava Cake",
                description: "Fresh apple",
                price: 50,
                stock: 20,
                category: "bakery",
                imageUrl: "/choco.jpg",
                publicId: "apple_1",
                createdAt: null,
            },
        ],

        vegetable: [
            {
                id: "5",
                name: "Carrot",
                description: "Organic carrot",
                price: 40,
                stock: 10,
                category: "vegetables",
                imageUrl: "/carrot.webp",
                publicId: "carrot_1",
                createdAt: null,
            },
            {
                id: "6",
                name: "Ladies Finger",
                description: "Organic carrot",
                price: 40,
                stock: 10,
                category: "vegetables",
                imageUrl: "/Ladies.jpg",
                publicId: "carrot_1",
                createdAt: null,
            },
            {
                id: "7",
                name: "Brinjal",
                description: "Organic carrot",
                price: 40,
                stock: 10,
                category: "vegetables",
                imageUrl: "/brinjal.webp",
                publicId: "carrot_1",
                createdAt: null,
            },
            {
                id: "8",
                name: "Tomato",
                description: "Organic carrot",
                price: 40,
                stock: 10,
                category: "vegetables",
                imageUrl: "/tomato.jpg",
                publicId: "carrot_1",
                createdAt: null,
            },

        ],
        fruits: [
            {
                id: "9",
                name: "Apple",
                description: "Organic carrot",
                price: 40,
                stock: 10,
                category: "vegetables",
                imageUrl: "/apple.jpg",
                publicId: "carrot_1",
                createdAt: null,
            },
            {
                id: "10",
                name: "Pineapple",
                description: "Organic carrot",
                price: 40,
                stock: 10,
                category: "vegetables",
                imageUrl: "/pineapple.jpg",
                publicId: "carrot_1",
                createdAt: null,
            },
            {
                id: "11",
                name: "Banana",
                description: "Organic carrot",
                price: 40,
                stock: 10,
                category: "vegetables",
                imageUrl: "/banana.jpeg",
                publicId: "carrot_1",
                createdAt: null,
            },
            {
                id: "12",
                name: "Dragon Fruit",
                description: "Organic carrot",
                price: 40,
                stock: 10,
                category: "vegetables",
                imageUrl: "/dragon.webp",
                publicId: "carrot_1",
                createdAt: null,
            },
        ],
        eggs: [
            {
                id: "13",
                name: "Eggs",
                description: "Farm eggs",
                price: 60,
                stock: 12,
                category: "eggs",
                imageUrl: "/eggs.jpg",
                publicId: "eggs_1",
                createdAt: null,
            },
        ],
    };

    const list = products[category] || [];

    return (
        <div className="bg-white min-h-screen ">
            <SearchBar />

            {category === "vegetable" && (
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
            {category === "fruits" && (
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
            {category === "bakery" && (
                <div className="bg-white p-4 rounded-lg mb-6 ">
                    <h2 className="text-4xl font-bold text-black  w-full mt-4">
                        Fresh Bakery Products
                    </h2>



                </div>
            )}
            {category === "eggs" && (
                <div className="bg-white p-4 rounded-2xl mb-6 ">
                    <h2 className="text-4xl font-bold text-black w-full mt-4">
                        Fresh Eggs
                    </h2>
                </div>
            )}

            {list.length === 0 ? (
                <p className="text-center text-black mt-6">No products found</p>
            ) : (
                <div className="grid grid-cols-5 gap-4 mt-6">
                    {list.map((item: any) => <ProductCard key={item.id} item={item} />)}
                </div>
            )}
{/* 
            {message && (
                <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full shadow-lg">
                    {message}
                </div>
            )} */}
        </div>
    );
}
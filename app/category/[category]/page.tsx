import { CartProvider } from "@/components/CartContext";
import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;

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
                id: "1",
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
                id: "2",
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
                id: "3",
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
                id: "4",
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
                id: "1",
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
                id: "2",
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
                id: "3",
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
                id: "4",
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
                id: "1",
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
        <>
            <ProductCard category={category} list={list} />
        </>
    );
}
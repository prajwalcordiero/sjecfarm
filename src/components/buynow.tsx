'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';



export default function BuyNow() {
    const router = useRouter();
    const params = useSearchParams();

    // Get data from URL (sent from product-card)
    const name = params.get('name');
    const price = params.get('price');
    const image = params.get('image');
    const handleProceed = () => {
        router.push('/payment');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFBEA]">
            <h1 className="text-3xl font-bold mb-6">Your Order</h1>

            {image && (
                <Image
                    src={image}
                    alt={name || 'Product'}
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                />
            )}

            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-green-600 font-bold text-lg mb-6">₹{price}</p>

            <button onClick={handleProceed} className="bg-green-600 text-white px-10 py-2 rounded">
                Proceed to Pay
            </button>

            <button
                onClick={() => router.back()}
                className="mt-4 text-white bg-green-600 px-6 py-2 rounded"
            >
                ← Back to Shopping
            </button>
        </div>
    );
}

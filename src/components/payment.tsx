'use client';
import Image from 'next/image';
import { useState } from 'react';


export default function PaymentPage() {
    const [method, setMethod] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleConfirm = () => {
        if (!method) {
            alert('Please select a payment method');
            return;
        }
        alert('✅ Your order has been placed successfully!');
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-semibold text-green-600">Order Confirmed!</h2>
                <p className="mt-2 text-gray-600">Thank you for shopping with us 🌱</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFBEA] flex justify-center items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px]">


                <div className="flex items-center gap-4 mb-6">

                </div>

                <h4 className="text-lg font-semibold mb-2">Select Payment Method</h4>
                <div className="space-y-3 mb-6">
                    <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            name="payment"
                            value="cod"
                            checked={method === 'cod'}
                            onChange={(e) => setMethod(e.target.value)}
                        />
                        Cash on Delivery
                    </label>

                    <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            name="payment"
                            value="online"
                            checked={method === 'online'}
                            onChange={(e) => setMethod(e.target.value)}
                        />
                        Online Payment
                    </label>
                </div>

                <button
                    onClick={handleConfirm}
                    disabled={!method}
                    className={`w-full py-2 rounded-lg text-white font-semibold transition ${method ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                >
                    Confirm Payment
                </button>
            </div>
        </div>
    );
}

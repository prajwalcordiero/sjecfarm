'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import GlassCard from '@/components/ui/landing/GlassCard';

const Newsletter: React.FC = () => {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			console.log('Subscribing to SJEC FARM PRODUCE:', email);
			setStatus('success');
			setEmail('');
			setTimeout(() => setStatus('idle'), 3000);
		} else {
			setStatus('error');
		}
	};

	return (
		<GlassCard
			className="p-4 flex flex-col justify-between"
			motionProps={{ initial: { opacity: 1, y: 0 } }}
		>
			<h4 className="text-lg font-bold mb-3 text-primary">
				SJEC FARM PRODUCE
			</h4>

			<p className="text-sm text-text-muted mb-4">
				Fresh vegetables, bakery items, and farm eggs delivered right to your college doorstep.
			</p>

			<form onSubmit={handleSubmit} className="flex space-x-2">
				<input
					type="email"
					placeholder="Enter your college email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="grow p-3 rounded-xl bg-background/50 border border-glass-border focus:border-primary outline-none transition text-sm"
				/>

				<button
					type="submit"
					className="p-3 rounded-xl bg-primary text-background hover:bg-secondary transition duration-300"
					aria-label="Subscribe to SJEC Farm Produce"
				>
					<Send className="w-5 h-5" />
				</button>
			</form>

			{status === 'success' && (
				<p className="mt-2 text-sm text-primary">
					You’re subscribed! Fresh updates coming your way
				</p>
			)}

			{status === 'error' && (
				<p className="mt-2 text-sm text-red-500">
					Please enter a valid email address.
				</p>
			)}
		</GlassCard>
	);
};

export default Newsletter;

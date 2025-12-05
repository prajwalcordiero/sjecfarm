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
			console.log('Subscribing:', email);
			setStatus('success');
			setEmail('');
			setTimeout(() => setStatus('idle'), 3000);
		} else {
			setStatus('error');
		}
	};

	return (
		<GlassCard className="p-4 flex flex-col justify-between" motionProps={{ initial: { opacity: 1, y: 0 } }}>
			<h4 className="text-lg font-bold mb-3 text-primary">Join the Fusion</h4>
			<p className="text-sm text-text-muted mb-4">
				Get the latest news and cosmic deals delivered to your inbox.
			</p>
			<form onSubmit={handleSubmit} className="flex space-x-2">
				<input
					type="email"
					placeholder="Your futuristic email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="grow p-3 rounded-xl bg-background/50 border border-glass-border focus:border-primary outline-none transition text-sm"
				/>
				<button
					type="submit"
					className="p-3 rounded-xl bg-primary text-background hover:bg-secondary transition duration-300"
					aria-label="Subscribe"
				>
					<Send className="w-5 h-5" />
				</button>
			</form>
			{status === 'success' && <p className="mt-2 text-sm text-primary">Subscribed successfully!</p>}
			{status === 'error' && <p className="mt-2 text-sm text-red-500">Please enter a valid email.</p>}
		</GlassCard>
	);
};

export default Newsletter;
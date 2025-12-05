import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Mail } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
	return (
		<footer className="w-full mt-24 py-16 border-t border-glass-border">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
				<div className="space-y-4">
					<Link href="/" className="text-3xl font-black tracking-widest text-primary uppercase">
						SJEC FARM PRODUCE
					</Link>
					<p className="text-text-muted text-sm">
						Shop Fresh. Shop Future. The premium market for the modern consumer.
					</p>
					<div className="flex space-x-4 pt-2">
						<a href="#" aria-label="Twitter" className="text-text-muted hover:text-primary transition"><Twitter /></a>
						<a href="#" aria-label="Instagram" className="text-text-muted hover:text-primary transition"><Instagram /></a>
						<a href="#" aria-label="Email" className="text-text-muted hover:text-primary transition"><Mail /></a>
					</div>
				</div>

				<div className="space-y-4">
					<h4 className="text-lg font-bold text-text-base">Quick Links</h4>
					<ul className="space-y-2 text-text-muted">
						<li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
						<li><Link href="/category/vegetables-fruits" className="hover:text-primary transition">Shop</Link></li>
						<li><Link href="/search" className="hover:text-primary transition">Search</Link></li>
						<li><Link href="/cart" className="hover:text-primary transition">Cart</Link></li>
					</ul>
				</div>

				<div className="space-y-4">
					<h4 className="text-lg font-bold text-text-base">Support</h4>
					<ul className="space-y-2 text-text-muted">
						<li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
						<li><Link href="/returns" className="hover:text-primary transition">Returns & Exchange</Link></li>
						<li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
						<li><Link href="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
					</ul>
				</div>

				<Newsletter />
			</div>

			<div className="mt-12 text-center text-sm text-text-muted border-t border-glass-border/50 pt-8">
				&copy; {new Date().getFullYear()} FreshFusion Market. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
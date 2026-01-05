"use client"
import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Mail } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
	return (
		<footer className="w-full mt-24 py-16 border-t border-glass-border">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
				
				{/* Brand */}
				<div className="space-y-4">
					<Link
						href="/"
						className="text-3xl font-black tracking-widest text-primary uppercase"
					>
						SJEC FARM PRODUCE
					</Link>
					<p className="text-text-muted text-sm">
						A campus-led initiative offering vegetables, fruits, bakery items
						and eggs grown and supported within St Joseph Engineering College.
						Fresh, responsible and community-focused.
					</p>
					<div className="flex space-x-4 pt-2">
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
							className="text-text-muted hover:text-primary transition"
						>
							<Twitter />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="text-text-muted hover:text-primary transition"
						>
							<Instagram />
						</a>
						<a
							href="mailto:sjecfarmproduce@sjec.ac.in"
							aria-label="Email"
							className="text-text-muted hover:text-primary transition"
						>
							<Mail />
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div className="space-y-4">
					<h4 className="text-lg font-bold text-text-base">Quick Links</h4>
					<ul className="space-y-2 text-text-muted">
						<li>
							<Link href="#AboutSJEC" className="hover:text-primary transition">
								About SJEC Farm Produce
							</Link>
						</li>
						<li>
							<Link href="/shop" className="hover:text-primary transition">
								Shop Campus Produce
							</Link>
						</li>
						<li>
							<Link href="/search" className="hover:text-primary transition">
								Search Products
							</Link>
						</li>
						<li>
							<Link href="/cart" className="hover:text-primary transition">
								My Basket
							</Link>
						</li>
					</ul>
				</div>

				{/* Support */}
				<div className="space-y-4">
					<h4 className="text-lg font-bold text-text-base">Support</h4>
					<ul className="space-y-2 text-text-muted">
						<li>
							<Link href="/how-it-works" className="hover:text-primary transition">
								How It Works
							</Link>
						</li>
						<li>
							<Link href="/quality-standards" className="hover:text-primary transition">
								Quality & Handling
							</Link>
						</li>
						<li>
							<Link href="/privacy-policy" className="hover:text-primary transition">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/terms-of-use" className="hover:text-primary transition">
								Terms of Use
							</Link>
						</li>
					</ul>
				</div>

				{/* Newsletter */}
				<Newsletter />
			</div>

			{/* Bottom Bar */}
			<div className="mt-12 text-center text-sm text-text-muted border-t border-glass-border/50 pt-8">
				&copy; {new Date().getFullYear()} SJEC FARM PRODUCE.{" "}
				<span>
					A St Joseph Engineering College campus initiative.
				</span>
			</div>
		</footer>
	);
};

export default Footer;

import Hero from "@/components/landing/hero";
import AboutSJEC from "@/components/landing/AboutSJEC";
import AboutSJECMart from "@/components/landing/AboutSJECMart";
import GreenInitiatives from "@/components/landing/GreenInitiatives";
import Footer from "@/components/landing/Footer";
export default function Home() {
	return (
		<div className="min-h-screen">
			<Hero />
			<AboutSJEC />
			<AboutSJECMart />
			<GreenInitiatives />
			<Footer />
		</div>
	);
}

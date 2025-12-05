
export const VegetableBgCard = () => {
	return (
		<svg x="20" y="20" width="277" height="296" viewBox="0 0 277 296" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="277" height="296" rx="35" fill="#F5FBF8" />
		</svg>
	)
}


export const BakeryBgCard = () => {
	return (
		<svg x="20" y="20" width="283" height="303" viewBox="0 0 283 303" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_n_559_807)">
				<rect width="283" height="303" rx="35" fill="#353535" />
			</g>
			<defs>
				<filter id="filter0_n_559_807" x="0" y="0" width="283" height="303" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feTurbulence type="fractalNoise" baseFrequency="0.66666668653488159 0.66666668653488159" stitchTiles="stitch" numOctaves="3" result="noise" seed="1471" />
					<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
					<feComponentTransfer in="alphaNoise" result="coloredNoise1">
						<feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
					</feComponentTransfer>
					<feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
					<feFlood floodColor="rgba(0, 0, 0, 0.58)" result="color1Flood" />
					<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
					<feMerge result="effect1_noise_559_807">
						<feMergeNode in="shape" />
						<feMergeNode in="color1" />
					</feMerge>
				</filter>
			</defs>
		</svg>

	)
}


export const EggBgCard = () => {
	return (
		<svg x="20" y="20" width="276" height="296" viewBox="0 0 276 296" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="275.385" height="295.116" rx="35" fill="url(#paint0_linear_559_816)" />
			<defs>
				<linearGradient id="paint0_linear_559_816" x1="138.121" y1="102.09" x2="191.74" y2="221.337" gradientUnits="userSpaceOnUse">
					<stop stopColor="#E5DFD1" />
					<stop offset="0.379808" stopColor="#BEB9AE" />
					{/* <stop offset="0.581731" stopColor="#AAA59B" /> */}
					{/* <stop offset="0.793269" stopColor="#949087" /> */}
					{/* <stop offset="1" stopColor="#7F7C74" /> */}
				</linearGradient>
			</defs>
		</svg>

	)
}


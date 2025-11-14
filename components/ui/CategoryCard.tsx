import RenderCategoryCard from "./CatergoryCard/RenderCategoryCard";
import EggHome from "./CatergoryCard/FontPath/EggHome";
import BakeryHome from "./CatergoryCard/FontPath/BakeryHome";
import VegetableHome from "./CatergoryCard/FontPath/VegetableHome";
import { BakeryBgCard, EggBgCard, VegetableBgCard } from "./CatergoryCard/sections/BgCard";
import { EggBtCard, VegetableBtCard, BakeryBtCard } from "./CatergoryCard/sections/BottomCard";

interface CategoryCardProps {
    category: "vegetable" | "bakery" | "eggs";
}

export default function CategoryCard({ category }: CategoryCardProps) {
    const categories = {
        vegetable: {
            imageSrc: "/vegetable-home.png",
            py: "70",
            w: "305.606",
            h: "204.426",
            bgRect: <VegetableBgCard />,
            titlePath: <VegetableHome />,
            bottomCard: <VegetableBtCard />,
        },
        bakery: {
            imageSrc: "/bakery-home.png",
            bgRect: <BakeryBgCard />,
            py: "15",
            titlePath: <BakeryHome />,
            bottomCard: <BakeryBtCard />,
        },
        eggs: {
            imageSrc: "/eggs-home.png",
            bgRect: <EggBgCard />,
            titlePath: <EggHome />,
            bottomCard: <EggBtCard />,
        },
    };

    return <RenderCategoryCard {...categories[category]} />;
}
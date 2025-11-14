import "./css/RenderCategoryCard.css"
export default function RenderCategoryCard({
    imageSrc,
    px, py, w, h,
    bgRect,
    titlePath,
    bottomCard
}) {
    return (
        <div className="flex">
            <div className="flex relative justify-center mb-20">
                <div className="glass-div"></div>

                <svg className="z-2" width="313" height="438" viewBox="0 0 313 438" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {bgRect}

                    <image
                        x={px}
                        y={py}
                        href={imageSrc}
                        width={w}
                        height={h}
                        preserveAspectRatio="xMidYMid slice"
                    />

                    {titlePath}
                </svg>
                {bottomCard}
            </div>
        </div>
    );
}
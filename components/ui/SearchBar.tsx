
export default function SearchBar() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[668px] h-15 absolute bg-[#363636] rounded-[25px]" />
            <input
                type="text"
                placeholder="  Search for pizza..."
                className="w-full max-w-[668px] h-15 outline-none frost"
            />
        </div>

    )
}

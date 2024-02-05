import Image from "next/image"

export default function SearchInput(){
    return(
        <div>
            <Image className="search-image" width={20} height={20} src="/icons/MagnifyingGlass.png" alt="magnifying-glass"/>
            <input type="text" placeholder="Search" />
        </div>
    )
}
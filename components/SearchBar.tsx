'use client'

import { SearchManufacturer } from "@/components"

import Image from "next/image"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button
        type="submit"
        className={`-ml-3 z-10 ${otherClasses}`}
    >
        <Image 
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"

        />
    </button>
)


const SearchBar = () => {

    const router = useRouter()

    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
  

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer === '' && model === '') {
            return alert('Please fill in the search bar')
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    }

    const updateSearchParams = (model: string, manufacturer: string) => {

        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search)

         // Update or delete the "model" search parameter based on the "model" value
        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        // Update or delete the "manufacturer" search parameter based on the "manufacturer" value
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        // Get the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        //  Push the updated pathname
        router.push(newPathname, {scroll: false})
    }

  return (
    <form 
        className="searchbar"
        onSubmit={handleSearch}  
    >
        <div className="searchbar__item">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
            <Image 
                src="/model-icon.png"
                alt="car model"
                width={25}
                height={25}
                className=" absolute w-[20px] h-[20px] ml-4"
            />
            <input
                type="text"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Tiguan"
                className="searchbar__input"
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
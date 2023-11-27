"use client"
import Image from "next/image"
import Link from "next/link"
import { CustomButton } from "@/components"

const error = () => {

    const handelReset = () => {
        location.reload()
    }


  return (
    <section className="flex flex-col items-center text-center w-full h-[100vh] justify-center p-6">
        <div className="flex flex-col items-center justify-center">
            <p className=" text-red-600 text-base">Oops!. There was a proplem</p>
            <div>
                <Image
                    src="/not-found.jpg"
                    alt="404"
                    width={400}
                    height={400}
                    className=" object-cover"

                />
            </div>
            <div className="flex flex-col gap-8">
                <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold text-gray-600">
                    Somthing went wrong!
                </h1>
                <p className="font-light italic md:text-base text-sm w-72 sm:w-full text-gray-500">Please try again later or contact our support if the proplem persists.</p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <CustomButton
                        title="Try again"
                        containerStyles="bg-primary-blue text-white rounded-full" 
                        handleClick={handelReset}
                    />
                    <Link href="/" onClick={handelReset}>
                        <CustomButton 
                            title="Go Back Home"
                            containerStyles="text-primary-blue rounded-full bg-whit border"
                        />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default error
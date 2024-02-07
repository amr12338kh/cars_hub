"use client"
import Image from "next/image"
import { CustomButton } from "@/components"
import { useRouter } from "next/navigation"

const NotFound = () => {

    const router = useRouter()

  return (
    <section className="flex flex-col items-center text-center w-full h-[100vh] justify-center p-6">
        <div className="flex flex-col items-center justify-center gap-2">
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
            <div className="flex flex-col gap-10">
                <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold text-gray-600">
                    Sorry, Page not found..!
                </h1>
                <div className="flex gap-4 flex-wrap justify-center">
                    <CustomButton
                        title="Try again"
                        containerStyles="bg-primary-blue text-white rounded-full" 
                        handleClick={(e) => router.refresh()}
                    />
                    <CustomButton 
                        handleClick={(e) => router.back()}
                        title="Go Back"
                        containerStyles="text-primary-blue rounded-full bg-whit border"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default NotFound
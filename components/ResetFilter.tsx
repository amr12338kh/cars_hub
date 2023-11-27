"use client"

import { CustomButton } from "@/components"
import { resetSearchParams } from "@/utils"
import { useRouter } from "next/navigation"

const ResetFilter = () => {

    const router = useRouter()

    const handleReset = () => {

      // Reset the search parameters 
      const resetPathname = resetSearchParams()

      router.push(resetPathname, { scroll: false })
    }

  return (
    <>
      <CustomButton 
        title="Reset All"
        handleClick={handleReset}
        btnType="button"
        containerStyles="bg-primary-blue rounded-full text-white hover:bg-transparent hover:text-primary-blue border overflow-hidden duration-100 h-10"
      />

      {/* <div className="dd h-8"></div> */}
    </>
  )
}

export default ResetFilter
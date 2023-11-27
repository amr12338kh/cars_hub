const CardsLoading = () => {
  return (
    <div className="car-card group animate-pulse">
        <div className="car-card__content">
            <h2 className="car-card__content-title w-3/4 h-7 rounded bg-gray-500 animate-pulse"></h2>
        </div>

        <p className="flex mt-6 w-10 h-10 rounded bg-gray-500 animate-pulse"></p>

        <div className="relative w-full h-40 my-3 object-contain" />

        <div className=" relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="w-5 h-5 bg-gray-500 rounded animate-pulse" />
                    <p className=" w-10 h-3 bg-gray-500 rounded animate-pulse"></p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="w-5 h-5 bg-gray-500 rounded animate-pulse" />
                    <p className=" w-10 h-3 bg-gray-500 rounded animate-pulse"></p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="w-5 h-5 bg-gray-500 rounded animate-pulse" />
                    <p className=" w-10 h-3 bg-gray-500 rounded animate-pulse"></p>
                </div>
            </div>

            <div className="car-card__btn-container">
                <div className="w-full py-[16px] rounded-full bg-gray-500 animate-pulse"/>
            </div>
        </div>
    </div>
  )
}

export default CardsLoading
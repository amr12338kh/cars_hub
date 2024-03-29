import { 
  Hero, 
  SearchBar, 
  CustomFilter,
  CarCard,
  ShowMore,
  ResetFilter,
} from "@/components"
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps, SearchParamsProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: SearchParamsProps) {

  // Get the data
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 8,
    model: searchParams.model || "",
  });

  // Check if the data is empty 
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div 
        id="discover"
        className="mt-12 padding-x padding-y max-width" 
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>

          <div className="home__filters">

            {/* Seerch bar */}
            <SearchBar />

            <div className="home__filter-container">

              {/* Fuel filter */}
              <CustomFilter 
                title="fuel" 
                options={fuels}  
              />

              {/* Year Filter */}
              <CustomFilter 
                title="year" 
                options={yearsOfProduction} 
              />
            </div>

            {/* Reset filter */}
            <ResetFilter />
          </div>
        </div>

      {!isDataEmpty // Check if the data is not empty
        ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: CarProps) => (
                <>
                  <CarCard car={car} />
                </>
              ))}
            </div>

            {/* Show More Button */}
            <ShowMore 
              pageNumber={(searchParams.limit || 8) / 8}
              isNext={(searchParams.limit || 8) > allCars.length}
            />
          </section>
        )
        : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops!, no results
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )
      }

      </div>
    </main>
  )
}

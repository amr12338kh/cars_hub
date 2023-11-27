import { CarProps, FilterProps } from "@/types"; // Import the required props from "types"

// Fetch all the data
export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, fuel, model, limit } = filters // Destructure the props 
    
    // Set the required headers
    const headers = {
        'X-RapidAPI-Key': 'b5e11b6dd1msh2aeb757691f0ba7p16c338jsn90a496cb547e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    // Set the required headers
    const res = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    }
    );
    
    // Parse the response as JSON
    const result = await res.json()

    return result;
};

// Calculate the car rent
export const calculateCarRent = (city_mpg: number, year: number) => {
  
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

// Generate the car images from anothor api
export const generateCarImageUrl = (car: CarProps, angle?: string) => {

  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, model, year } = car; // Destructure the props 

  // Append the data to the url
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

// Update the search
export const updateSearchParams = (type: string, value: string) => {

  // Get the current url 
  const searchParams = new URLSearchParams(window.location.search)

  // Set the new search parameter 
  searchParams.set(type, value)

  // Set the new search parameter 
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname

} 

// Reset all the filters
export const resetSearchParams = () => {

  // Get the current url 
  const newPathname = `${window.location.pathname}`

  return newPathname
}
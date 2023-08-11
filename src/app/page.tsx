import CarouselSlides from "./components/CarouselSlides";
import CategoriesBar from "./components/CategoriesBar";
import PopularBrands from "./components/PopularBrands";
import RecommendedBar from "./components/RecommendedBar";


export default function Home() {
  // Have to make it responsive
  return (
    <div className="bg-[#FEFEFE]">
      <CategoriesBar />
      <div className="max-w-fit 2xl:max-w-screen-2xl 2xl:px-16 mx-auto pb-10 sm:pb-0 items-center justify-items-center place-self-center">
        <CarouselSlides />
        <RecommendedBar />
        <PopularBrands />
      </div>
    </div>
  );
}

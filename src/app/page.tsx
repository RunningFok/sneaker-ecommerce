import CarouselSlides from "./components/CarouselSlides";
import CategoriesBar from "./components/CategoriesBar";
import Footer from "./components/Footer";
import PopularBrands from "./components/PopularBrands";
import RecommendedBar from "./components/RecommendedBar";

export default function Home() {
  return (
    <div className="bg-[#FEFEFE]">
      <CategoriesBar />
      <div className="sm:max-w-fit 2xl:max-w-screen-2xl 2xl:px-16 mx-auto items-center justify-items-center place-self-center">
        <CarouselSlides />
        <RecommendedBar />
        <PopularBrands />
      </div>
    </div>
  );
}

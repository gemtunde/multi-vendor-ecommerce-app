//import Image from "next/image";
import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainingList from "@/components/frontend/CommunityTrainingList";
import Footer from "@/components/frontend/Footer";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import { getData } from "@/lib/getData";

export default async function Home() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter((item) => item.products.length >= 1);

  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      {categories.map((category) => {
        return <CategoryList category={category} key={category.id} />;
      })}
      {/* <CategoryList /> */}
      <CommunityTrainingList />
      {/* <Footer /> */}
    </div>
  );
}

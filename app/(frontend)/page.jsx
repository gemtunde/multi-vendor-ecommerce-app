//import Image from "next/image";
import CategoryList from "@/components/frontend/CategoryList";
import CommunityTrainingList from "@/components/frontend/CommunityTrainingList";
import Footer from "@/components/frontend/Footer";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      <CategoryList />
      <CategoryList />
      <CommunityTrainingList />
      <Footer />
    </div>
  );
}

//import Image from "next/image";
import Hero from "@/components/frontend/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <h2 className="text-4xl"> Welcome to Ecommerce</h2>

      <Link className="my-4 underline" href="/register-farmer">
        Become a farmer
      </Link>
    </div>
  );
}

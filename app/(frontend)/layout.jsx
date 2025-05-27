import Navbar from "@/components/frontend/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-6 lg:px-0">{children}</div>
    </>
  );
}

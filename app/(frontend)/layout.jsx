import Navbar from "@/components/frontend/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-8">{children}</div>
    </>
  );
}

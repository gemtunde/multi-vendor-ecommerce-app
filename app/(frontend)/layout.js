import Navbar from "@/components/frontend/Navbar";

export default function Layout({ children }) {
  <>
    <Navbar />
    {children}
  </>;
}

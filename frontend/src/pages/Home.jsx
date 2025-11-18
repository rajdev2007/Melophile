import MainContent from "@/components/MainContent";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}
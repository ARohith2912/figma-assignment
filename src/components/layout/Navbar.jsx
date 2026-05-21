import SearchBar from "../common/SearchBar";
import Button from "../common/Button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      
      <SearchBar />

      <div className="flex items-center gap-3">
        
        <Button
          title="Upgrade"
          className="bg-yellow-400 text-white text-sm"
        />

        <Button
          title="+ Create Campaign"
          className="bg-blue-500 text-white text-sm"
        />

        <div className="w-8 h-8 rounded-full bg-gray-300"></div>

        <Menu className="text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
}
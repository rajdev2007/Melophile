
import { Music } from "lucide-react";

export default function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar bg-[#121212] text-white ml-24 mb-2 mr-2 rounded-lg">
        <div className="ml-10 mt-4">
            <h6 className="text-gray-300 text-xs">
                Your Sound Awaits
            </h6>
            <h1 className="font-bold text-xl">
                Ready To Dive In ?
            </h1>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-8 justify-center gap-3 ml-10 mr-10 mt-4">
            
            <div className="col-span-2 w-full h-16 flex bg-[#353434] rounded-lg gap-3">
                <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-lg">
                    <Music className="w-5 h-5 text-white" />
                </div>
                <div className="w-full h-16 pt-5 font-semibold">
                    Chill vibes
                </div>
            </div>

            <div className="col-span-2 w-full h-16 flex bg-[#353434] rounded-lg gap-3">
                <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-lg">
                    <Music className="w-5 h-5 text-white" />
                </div>
                <div className="w-full h-16 pt-5 font-semibold">
                    Chill vibes
                </div>
            </div>

            <div className="col-span-2 w-full h-16 flex bg-[#353434] rounded-lg gap-3">
                <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-lg">
                    <Music className="w-5 h-5 text-white" />
                </div>
                <div className="w-full h-16 pt-5 font-semibold">
                    Chill vibes
                </div>
            </div>

            <div className="col-span-2 w-full h-16 flex bg-[#353434] rounded-lg gap-3">
                <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-lg">
                    <Music className="w-5 h-5 text-white" />
                </div>
                <div className="w-full h-16 pt-5 font-semibold">
                    Chill vibes
                </div>
            </div>

            <div className="col-span-2 w-full h-16 flex bg-[#353434] rounded-lg gap-3">
                <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-lg">
                    <Music className="w-5 h-5 text-white" />
                </div>
                <div className="w-full h-16 pt-5 font-semibold">
                    Chill vibes
                </div>
            </div>

            <div className="col-span-2 w-full h-16 flex bg-[#353434] rounded-lg gap-3">
                <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-lg">
                    <Music className="w-5 h-5 text-white" />
                </div>
                <div className="w-full h-16 pt-5 font-semibold">
                    Chill vibes
                </div>
            </div>

            <div className="col-span-2 w-full h-16 flex bg-[#353434] rounded-lg gap-3">
                <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-lg">
                    <Music className="w-5 h-5 text-white" />
                </div>
                <div className="w-full h-16 pt-5 font-semibold">
                    Chill vibes
                </div>
            </div>

            <div className="col-span-2 w-full h-16 flex bg-[#353434] rounded-lg gap-3">
                <div className="w-24 h-16 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center rounded-lg">
                    <Music className="w-5 h-5 text-white" />
                </div>
                <div className="w-full h-16 pt-5 font-semibold">
                    Chill vibes
                </div>
            </div>

        </div>

    </div>
  );
}
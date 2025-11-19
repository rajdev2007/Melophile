import { Music, Play } from "lucide-react";

export default function HorizontalRow({ subHeading, heading, items }){
    return (
        <div>
            <div className="ml-10 mt-10">
                <h6 className="text-gray-300 text-xs">
                    {subHeading}
                </h6>
                <h1 className="font-bold text-xl">
                    {heading}
                </h1>
            </div>

            <div className="inline-flex gap-6 px-8 py-4">
            {items.map((item, index) => (
              <button
                key={index}
                className="flex-none w-48 snap-start group/card relative rounded-lg overflow-hidden  hover:bg-neutral-800 transition-all duration-300 "
              >
                <div className="relative aspect-square bg-gradient-to-br from-purple-600 to-blue-600">
                  <Music className="absolute inset-0 m-auto w-20 h-20 text-white/80" />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  <button className="absolute bottom-4 right-4 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 hover:scale-105">
                    <Play className="w-7 h-7 text-black ml-1" fill="black" />
                  </button>
                </div>

                <div className="p-2 text-left">
                  <h3 className="font-bold truncate">{item.title}</h3>
                  <p className="text-sm text-gray-400 truncate">{item.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
    )
}
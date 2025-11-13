
export const Navbar = ()=>{
    return (
        <div className="flex justify-between bg-black p-2">
            <div>
                logo
            </div>

            <div className="flex gap-5">
                <div>
                    <button className="bg-gray-800 rounded-full p-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-7">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-2 px-4 py-[0px] w-full max-w-xs bg-white text-[#808080] rounded-3xl border"> 
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg size-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > 
                        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path> 
                    </svg> 
                    <input type="text" placeholder="Search your next obsession…" className="bg-transparent outline-none w-96" /> 
                </div>
            </div>
            <div>
                Account
            </div>
        </div>
    )
}
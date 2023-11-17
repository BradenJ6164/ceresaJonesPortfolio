export function Home() {
    return (
        <>
            <div className="bg-slate-900">
                <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">


                        <div className="max-w-3xl text-center mx-auto">
                            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                Imagination Unleashed by Ceresa Jones
                            </h1>
                        </div>


                        <div className="max-w-3xl text-center mx-auto">
                            <p className="text-lg text-gray-400">Expert storytelling, engaging content, creative,
                                versatile
                                writing services.
                            </p>
                        </div>


                        <div className="text-center">
                            <button
                                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                            >
                                Contact Me
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                     height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="max-w-[85rem] mx-auto px-4 py-6 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Better
                            Literature for your
                            Business</h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Discover how important literature
                            is in business.</p>


                    </div>
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <img alt="" className="w-full rounded-xl"
                             src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}
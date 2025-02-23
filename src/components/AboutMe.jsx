import React from 'react'
import { Monitor, Smartphone, Server } from "lucide-react"

function AboutMe() {
    return (
        <div className="bg-[#121f28] text-white px-10 sm:px-20 md:px-24 lg:px-30 pt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">  {/* Added items-center */}
                
                {/* Services Section */}
                <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#ff715b] hidden md:block" />

                    <div className="space-y-12">
                        {/* Website Development */}
                        <div className="relative flex items-start">
                            <div className="absolute left-0 md:left-4 w-4 h-4 rounded-full bg-[#ff715b] mt-2" />
                            <div className="ml-8 md:ml-16">
                                <div className="flex items-center gap-4 mb-2">
                                    <Monitor className="w-8 h-8" />
                                    <h3 className="text-xl font-semibold">Website Development</h3>
                                </div>
                            </div>
                        </div>

                        {/* App Development */}
                        <div className="relative flex items-start">
                            <div className="absolute left-0 md:left-4 w-4 h-4 rounded-full bg-[#ff715b] mt-2" />
                            <div className="ml-8 md:ml-16">
                                <div className="flex items-center gap-4 mb-2">
                                    <Smartphone className="w-8 h-8" />
                                    <h3 className="text-xl font-semibold">App Development</h3>
                                </div>
                            </div>
                        </div>

                        {/* Website Hosting */}
                        <div className="relative flex items-start">
                            <div className="absolute left-0 md:left-4 w-4 h-4 rounded-full bg-[#ff715b] mt-2" />
                            <div className="ml-8 md:ml-16">
                                <div className="flex items-center gap-4 mb-2">
                                    <Server className="w-8 h-8" />
                                    <h3 className="text-xl font-semibold">Website Hosting</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="space-y-8">
                    <h2 className="text-5xl font-bold">About me</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I started my software journey from photography. Through that, I learned to love the process of creating from
                        scratch. Since then, this has led me to software development as it fulfills my love for learning and
                        building things.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-8">
                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold">120</span>
                                <span className="text-[#ff715b] text-2xl font-bold">+</span>
                            </div>
                            <p className="text-gray-400 mt-2">Completed Projects</p>
                        </div>

                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold">95</span>
                                <span className="text-[#ff715b] text-2xl font-bold">%</span>
                            </div>
                            <p className="text-gray-400 mt-2">Client satisfaction</p>
                        </div>

                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold">10</span>
                                <span className="text-[#ff715b] text-2xl font-bold">+</span>
                            </div>
                            <p className="text-gray-400 mt-2">Years of experience</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe

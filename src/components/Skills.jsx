import React from 'react';

function Skills() {
    const skills = [
        "HTML5", "CSS", "Javascript", "React", "Node.js", "Git", "Github", "C/C++","Java","SQL",
        "HTML5", "CSS", "Javascript", "React", "Node.js", "Git", "Github", "C/C++" ,"Java","SQL"
    ];

    return (
        <div className='bg-[#16232c] text-white py-8 overflow-hidden'>
            <div className="relative flex">
                <div className="animate-scroll flex whitespace-nowrap gap-16">
                    {skills.map((skill, index) => (
                        <span 
                            key={index} 
                            className='text-xl font-bold text-[#454f59] inline-block cursor-pointer hover:text-white'
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}

export default Skills;
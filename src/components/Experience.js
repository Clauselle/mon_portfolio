import { EXPERIENCE } from "..";

const Experience = () =>{
    return (
        <div className="border-b border-neutral-800 pb-4">
            <h1 className="my-20 text-center text-4xl">Experiences</h1>
            <div>
                {EXPERIENCE.map((experience, index) =>(
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/5">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/5">
                            <h6 className="mb-2 font-semibold">{experience.role}</h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            {experience.technologies.map((tech, index) =>(
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-pink-400">{tech}</span>
                            ))}
                        </div>
                        <div className="w-full lg:w-1/5">
                            <button className="ml-20 rounded px-4 py-2 text-neutral-900
    bg-gradient-to-r from-pink-400 to-purple-500
    transition-all duration-300
    hover:from-pink-500 hover:to-purple-600
    hover:shadow-xl hover:shadow-pink-500/40
    hover:scale-105">View project</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
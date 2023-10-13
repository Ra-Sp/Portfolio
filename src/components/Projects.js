import { projects } from "../Data.js";

export default function Projects()
{
    return( 
    <section id="Projects">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mt-3 text-white">
                    Projects
                </h1>
            </div>
            <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                    href={project.link}
                    key={project.title}
                    className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                            alt="Project-Image"
                            className="absolute inset-0 w-full h-full object-cover object-center border border-solid border-white"  
                            src={project.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <h2 className="tracking-widest text-sm title-font font-medium text-customYellow mb-1">
                                    {project.subtitle}
                                </h2>
                                <p className="leading-relaxed">{project.year}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
}
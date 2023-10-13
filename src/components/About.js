export default function About()
{
    return(
        <section>
            <div id="Intro" className="flex flex-row justify-between">
                <div className="container py-20 lg:px-40 title-font sm:text-1xl text-2xl mt-10 font-medium w-4/6">
                    <h3>Hi! I am </h3>
                    <h1 className="sm:text-5xl text-6xl text-customYellow">Radhika Sardeshpande,</h1>    
                    <h2>an engineer of computer science things.</h2> 
                </div>
                <div className="w-2/6">
                <img
                    alt="About-Image"
                    className="my-5"
                    src="./images/about-image.png"
                />
                </div>
            </div>
            <div id="About">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-15">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mt-4 text-white">About Me</h1>
                    </div>
                    <div className="mt-5 px-25 text-justify">
                        <p id="About-desc">
                            Hi! I am Radhika Sardeshpande, 
                            a Computer Science Engineering Student from 
                            
                            the Vellore Institute of Technology, Chennai Campus.
                            I am currently in the 3rd year of my B. Tech degree.
                            <br/>
                            I am also a Google WE Scholar.
                            
                            Click <a href="https://we.talentsprint.com/" target="_blank"><u>here</u></a> to know more about Google's WE (Women Engineers) program.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


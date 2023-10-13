export default function Navbar()
{
    const downloadResume = () => {
        const documentUrl = './Radhika_Sardeshpande_Resume.pdf';

        const anchor = document.createElement('a');
        anchor.href = documentUrl;
        anchor.download = 'Radhika_Sardeshpande_Resume.pdf';
        anchor.style.display = 'none';
        document.body.appendChild(anchor);

        anchor.click();

        document.body.removeChild(anchor);
    };

    return (
        <header className="bg-customViolet md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <div className="title-font font-medium text-white mb-4 md:mb-0">
              <a href="#About" className="ml-3 text-xl">
                Radhika 
              </a>
            </div>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#Projects" className="mr-5 hover:text-white">
                Past Work
              </a>
              <a href="#Skills" className="mr-5 hover:text-white">
                Skills
              </a>
            </nav>
            <a
              href="#Contact"
              className="inline-flex items-center bg-customViolet2 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Hire Me
            </a>
            <button
              href=""
              className="inline-flex items-center bg-customViolet2 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base ml-4 mt-4 md:mt-0"
              onClick={downloadResume}
            >
              Resume
            </button>
          </div>
        </header>
      );
}
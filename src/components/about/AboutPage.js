

// components

import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
  
      <main>
        {/* hero  */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-80 bg-green-900"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                 Pyron Digital Marketing Firm .
                  </h1>
                  <p className="mt-4 text-lg text-white">
                  Our aim is to support them step by step in order to help them familiarise themselves with and make good use of the various digital platforms , their membership is essential , the success of your digital transformation project must be carried out by competent people.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-green"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
{/* A propos */}
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
          

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-600">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-green-900">
                A trusted digital Marketing Firm.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                PYRON Digital Marketing Firm is one of the most renowned web and mobile application development companies in Tunisia. mcarre technology has been founded by a Tunisian team and now benefits from the knowledge, skills and expertise of a multinational team. As such, we specialise in the development of web/mobile applications, the development of mobile applications, the SEO referencing, digital marketing, and the UI/UX design for start-ups and business customers.
                </p>
                
              
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-green-100 w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    
                    <h4 className="text-xl font-bold ">
                    "Dreams are always departures."
                       </h4>
                    <p className="text-md font-light mt-2 ">
                    Do not hesitate and contact us and we will go together to the next level
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* A propos */}
        
{/* team */}
       
    
      
      </main>
     
    </>
  );
}

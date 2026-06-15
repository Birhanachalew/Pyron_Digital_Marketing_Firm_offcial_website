/* This example requires Tailwind CSS v2.0+ */
export default function HomeCta() {
    return (
      <div className="bg-brandHeadline/10">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Are you ready?</span>
            <span className="block text-brandHeadline">Tell us about your project/digital needs.</span>
          </h2>
          
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://www.linkedin.com/company/payron/"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandButton hover:bg-brandAccent"
              >contact us
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://www.linkedin.com/company/payron/"
                className="inline-flex items-center justify-center px-5 py-3 border border-brandHeadline text-base font-medium rounded-md text-brandHeadline bg-white hover:bg-brandHeadline hover:text-white"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
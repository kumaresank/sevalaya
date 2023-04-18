export default function Home() {
  return (
    <>
      <div
        className="relative pt-16 pb-20 flex content-center items-center justify-center"
        style={{minHeight: '95vh'}}
      >
        <div className="absolute top-0 w-full h-full bg-top bg-cover bg-hero-pattern">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto" data-aos="fade-in">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center xl:w-6/12">
              <div>
                <h1 className="text-white font-semibold md:text-2xl sm:text-lg m-4">
                  SWAMI VIVEKANANDAR SEVALAYA & SOCIAL DEVELOPMENT TRUST
                </h1>
                <p className="mt-4 text-lg text-gray-300 sm:text-lg m-3">
                  STRENGTH IS LIFE WEAKNESS IS DEATH
                </p>
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <a
                    href="/services"
                    className="mt-10 flex flex-row  flex-wrap  justify-center   border-2 border-white rounded-md font-bold text-white   p-2 transition duration-300 ease-in-out hover:bg-orange-800 hover:text-white "
                  >
                    <div className=" w-6  ">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="pl-1">Our Services</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row bg-orange-800 w-full ml-auto mr-auto text-center justify-center  content-center py-20 ">
        <div className="w-20 md:mr-20 sm:w-25 ">
          <img src="assets/images/quote-1.png" />
        </div>
        <div className="flex flex-col">
          <p className="md:text-2xl sm:text-lg text-yellow-200  font-extrabold">
            “ARISE! AWAKE! AND STOP NOT TILL THE GOAL IS REACHED “
          </p>

          <p className="pt-5 text-yellow-400 font-semibold sm:text-lg md:text-xl">
            – Swami Vivekanandar
          </p>
        </div>
      </div>

      <div className="bg-orange-800 p-20">
        <h1 className="text-4xl font-black text-white pb-6 px-6 md:px-12 text-center ">
          Our Services
        </h1>
      </div>

      <div className="bg-orange-800">
        <div className="container mx-auto  grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 lg:px-40 xl:px-50 2xl:px-60">
          <div>
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-60">
                <img
                  className="absolute h-full w-full object-cover object-center"
                  src="assets/images/poor-child-children-2061337-768x545.jpg"
                  alt=""
                />
              </div>
              <div className="relative bg-orange-900">
                <div className="py-10 px-8">
                  <h3 className="text-2xl font-bold text-yellow-200">
                    Educational Work
                  </h3>

                  <p className="leading-7 text-white pb-7">
                    Career Guidance is given for Students from the poor economic
                    background and also for Toppers. Through Our Trust, more
                    than 35 Students are doing their Under Graduates.
                  </p>
                  <div className="mt-10 flex justify-between items-center">
                    <a href="/services" className="flex items-center">
                      <p className="mr-4 hover:text-black text-yellow-100">
                        Read more
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.125"
                        height="13.358"
                        viewBox="0 0 14.125 13.358"
                      >
                        <g transform="translate(-3 -3.293)">
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                            fill="#1d1d1d"
                            fillRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-60">
                <img
                  className="absolute h-full w-full object-cover object-center"
                  src="assets/images/meditate-meditation-peaceful-1851165-768x512.jpg"
                  alt=""
                />
              </div>
              <div className="relative bg-orange-900">
                <div className="py-10 px-8">
                  <h3 className="text-2xl font-bold text-yellow-200">
                    Spiritual Work
                  </h3>

                  <p className="leading-7 text-white">
                    Prayers are done daily in the morning and in Afternoon along
                    with meditation and Bajans. Spiritual Classes are taken
                    every Sunday. Children and common people are made to
                    participate in this spiritual talk session.
                  </p>
                  <div className="mt-10 flex justify-between items-center">
                    <a href="/services" className="flex items-center">
                      <p className="mr-4 hover:text-black text-yellow-100">
                        Read more
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.125"
                        height="13.358"
                        viewBox="0 0 14.125 13.358"
                      >
                        <g transform="translate(-3 -3.293)">
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                            fill="#1d1d1d"
                            fillRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="bg-orange-800 pt-20">
        <div className="container mx-auto  grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 lg:px-40 xl:px-50 2xl:px-60">
          <div>
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-60">
                <img
                  className="absolute h-full w-full object-cover object-center"
                  src="assets/images/compressed/team-spirit-cohesion-together-2447163-300x243.jpg"
                  alt=""
                />
              </div>
              <div className="relative bg-orange-900">
                <div className="py-10 px-8">
                  <h3 className="text-2xl font-bold text-yellow-200">
                    Social Work
                  </h3>

                  <p className="leading-7 text-white pb-7">
                    Sister Niveditha Library is Created with more than 3000
                    Books which the students and common people can use every
                    Friday and Saturday.
                  </p>
                  <div className="mt-10 flex justify-between items-center">
                    <a href="/services" className="flex items-center">
                      <p className="mr-4 hover:text-black text-yellow-100">
                        Read more
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.125"
                        height="13.358"
                        viewBox="0 0 14.125 13.358"
                      >
                        <g transform="translate(-3 -3.293)">
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                            fill="#1d1d1d"
                            fillRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden">
              <div className="relative overflow-hidden pb-60">
                <img
                  className="absolute h-full w-full object-cover object-center"
                  src="assets/images/compressed/Karimnagar.jpg"
                  alt=""
                />
              </div>
              <div className="relative bg-orange-900">
                <div className="py-10 px-8">
                  <h3 className="text-2xl font-bold text-yellow-200">
                    Medical Work
                  </h3>

                  <p className="leading-7 text-white pb-12">
                    Every year medical camp is being set up for people in our
                    locality.
                  </p>
                  <div className="mt-10 flex justify-between items-center">
                    <a href="/services" className="flex items-center">
                      <p className="mr-4 hover:text-black text-yellow-100">
                        Read more
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.125"
                        height="13.358"
                        viewBox="0 0 14.125 13.358"
                      >
                        <g transform="translate(-3 -3.293)">
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                            fill="#1d1d1d"
                            fillRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="bg-orange-800 p-20">
        <div>
          <p className="text-white text-4xl text-center font-bold">
            Some of Our Work
          </p>
        </div>
      </div>

      <div className="bg-orange-800 grid xl:grid-cols-4 xl:grid-flow-row sm:grid-flow-col md:grid-flow-col ontent-center items-center justify-center pb-20 ">
        <div className="  p-5 ">
          <img
            src="assets/images/compressed/1.jpg"
            className="rounded-lg max-w-full h-auto object-contain"
          />
        </div>
        <div className="  p-5">
          <img
            src="assets/images/compressed/2.jpg"
            className="rounded-lg max-w-full h-auto object-contain"
          />
        </div>
        <div className="  p-5">
          <img
            src="assets/images/compressed/3.jpg"
            className="rounded-lg max-w-full h-auto object-contain"
          />
        </div>
        <div className=" p-5 ">
          <img
            src="assets/images/compressed/4.jpg "
            className="rounded-lg w-full   object-contain"
          />
        </div>
      </div>
    </>
  );
}

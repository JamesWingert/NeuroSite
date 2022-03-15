import Banner from '@/components/Banner';
import React, { useRef } from 'react';
import tester from 'public/servebanner.jpg';
import Divider from '@/components/layout/Dividers';

const Appointment = () => {
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <>
      <Banner pageName={'Book an Appointment'} imageURL={tester.src}></Banner>
      <div className="testImage">
        <Divider sectionName="Request an Appointment"></Divider>

        <div className="container">
          <form id="login" onSubmit={handleSubmit}>
            <div className="bg-white dark:bg-gray-800">
              <div className=" mx-auto bg-white  mt-10 rounded px-4">
                <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                  <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                    <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                      To Request an Appointment Online with Neurology and Sleep
                      Medicine Associates, please use the form below, and our
                      scheduling coordinator will contact you by phone within
                      the next 48 hours (not including weekends or holidays) to
                      find an appointment that best meets your needs. 
                    
                    </p>
             
                  </div>
                  <p className='text-red-600 text-center'>If you are
                      experiencing a medical emergency, please call 911.</p>
                </div>
                <div className="mx-auto pt-4">
                  <div className="items-center">
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="FirstName"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="FirstName"
                        name="firstName"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="LastName"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="LastName"
                        name="lastName"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="LastName"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Gender
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-everything"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Male
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-email"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Female
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Rather not say
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="StreetAddress"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Name of Primary Insurance
                      </label>
                      <input
                        type="text"
                        id="StreetAddress"
                        name="streetAddress"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="StreetAddress"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        ID Number Insurance
                      </label>
                      <input
                        type="text"
                        id="StreetAddress"
                        name="streetAddress"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="StreetAddress"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Your Email
                      </label>
                      <input
                        type="text"
                        id="StreetAddress"
                        name="streetAddress"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="StreetAddress"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Best Contact Number
                      </label>
                      <input
                        type="text"
                        id="StreetAddress"
                        name="streetAddress"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="LastName"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Is it okay to leave a voicemail at above phone number?
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-everything"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-email"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                    You will be contacted before an appointment is offered. If
                    you would like to provide any additional information to the
                    scheduling coordinator, please do so when you are contacted
                    via telephone.
                    {/* <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <div className="flex items-center pb-2">
                        <label
                          htmlFor="ZIP"
                          className="text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          ZIP/Postal Code
                        </label>
                        <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={16}
                            height={16}
                          >
                            <path
                              className="heroicon-ui"
                              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        name="zip"
                        required
                        id="ZIP"
                        className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      />
                      <div className="flex justify-between items-center pt-1 text-red-400">
                        <p className="text-xs">Incorrect Zip Code</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-x-circle"
                        >
                          <circle cx={12} cy={12} r={10} />
                          <line x1={15} y1={9} x2={9} y2={15} />
                          <line x1={9} y1={9} x2={15} y2={15} />
                        </svg>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="container mx-auto w-11/12 xl:w-full mb-20">
                <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                  <button className="bg-white border-2 border-wcyan focus:outline-none transition duration-150 ease-in-out hover:bg-wcyan/30 rounded text-wcyan  px-6 py-2 text-xs mr-4">
                    Cancel
                  </button>
                  <button
                    className="bg-wcyan/70 border-wcyan border-2 focus:outline-none transition duration-150 ease-in-out hover:bg-wcyan rounded text-white px-8 py-2 text-sm"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Appointment;
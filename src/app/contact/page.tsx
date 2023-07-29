import { faComments, faHandHoldingHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className='contact '>
      {/* 3 communication from  */}
      <div className='w-screen grid grid-flow-row'>

        <div className='text-5xl font-bold mx-auto my-10'>
          Contact Us
        </div>

        <div className=' max-w-[84rem] grid grid-flow-row  gap-3 md:grid-flow-col w-screen grid-cols-1 sm:grid-cols-3 p-10 mx-auto justify-items-center'>

          <div className='w-[21rem]'>
            <div className=" p-8 bg-white border border-gray-200 rounded-2xl shadow-slate-500 drop-shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div className='w-10 h-10 mx-auto my-4'>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <div className="mb-6 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">Email</div>
              <p className="mb-3 font-extralight text-gray-500 dark:text-gray-400">Monday to Friday Expected</p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">response time: 72 hours</p>
              <Link href="#" className="flex justify-center text-blue-600 hover:text-lime-700">
                Send Email
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </Link>
            </div>
          </div>

          <div className=''>
            <div className=" p-8 bg-white border border-gray-200 rounded-2xl shadow-slate-500 drop-shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div className='w-12 h-10 mx-auto my-4'>
                <FontAwesomeIcon icon={faComments} />
              </div>
              <div className="mb-6 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">Chat</div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Weekdays: 9 AM — 6 PM </p>
              <p className="mb-3 text-center font-normal text-gray-500 dark:text-gray-400">Weekends: 9 AM — 5 PM</p>
              <Link href="#" className="flex justify-center text-blue-600 hover:text-lime-700">
                Chat Now
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </Link>
            </div>
          </div>

          <div className=''>
            <div className=" p-8 bg-white border border-gray-200 rounded-2xl shadow-slate-500 drop-shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div className=' w-12 h-10 mx-auto my-4'>
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              </div>
              <div className="mb-6 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">Community</div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">10M+ Active Members</p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">100+ Active Organizations</p>
              <Link href="#" className="flex justify-center text-blue-600 hover:text-lime-700">
                Join Now
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex'>
          <div className='text-3xl font-bold mx-auto my-6'>
            We&apos;d love to hear  <span className=' text-red-600'>from you</span>
          </div>
        </div>
        <div className="flex py-10">
          <div className=" min-w-[21rem] md:min-w-[26rem] bg-white rounded-2xl  drop-shadow-xl p-8 flex flex-col mx-auto mt-10 md:mt-0 shadow-md">
            <h2 className="text-gray-900 text-xl font-bold text-center mb-1 title-font">Feedback</h2>
            {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white w-36 text-center mx-auto rounded-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">Button</button>
            <p className="text-xs text-gray-500 mt-3">All right revserd by joy</p>
          </div>
        </div>

        <div className="text-gray-600 body-font rounded-md">
          <div className=" bg-gray-300 h-96">
            <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=200&hl=en&q=%C4%B0joy+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{}}></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}

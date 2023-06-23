import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import {faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      {/* 3 communication from  */}
      <div className='w-screen grid grid-flow-row'>

        <div className='text-5xl font-bold mx-auto my-10'>
          Contact Us
        </div>

        <div className=' max-w-[84rem] grid grid-flow-row  gap-3 md:grid-flow-col w-screen grid-cols-1 sm:grid-cols-3 p-10 mx-auto justify-items-center'>

          <div className=' w-[21rem]'>
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

          <div className=' w-[21rem]'>
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

          <div className=' w-[21rem]'>
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
      {/* form div */}
      <div className='x'>
        x
      </div>

      {/* map */}
      <div className='x'>

      </div>

    </div>
  )
}

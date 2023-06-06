import React from 'react'
import Image from 'next/image';
import Netflix from '../../../public/home.svg'
import '../globals.css'
import Link from 'next/link';
import About from '../about/page';

const Hero = () => {
    return (
        <>
            <div className='main h-full px-1 md:px-2 lg:px-8 flex flex-col-reverse md:flex-row'>
                <div className='  flex flex-col font-bold w-full md:w-1/2 justify-center px-24'>
                    <h5 className="flex md:text-[45px]">
                        Lets Explore Movies World Together With Webflix
                    </h5>
                    <p className='mt-7 font-light md: text-xl'>
                        From award-winning dramas to blockbuster action movies, We've got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.
                    </p>
                    <Link href="/about">
                        <button className=" bg-black w-40 h-9 mt-6  text-white text-center rounded-2xl hover:text-black hover:bg-cyan-50">
                            Explore Web
                        </button>
                    </Link>
                </div>
                <div className='flex  w-full md:w-1/2 justify-center'>

                    <Image src={Netflix} alt='netflix img' width={600} />
                </div>
            </div>
        </>
    )
}

export default Hero;
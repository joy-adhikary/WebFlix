// "use client"
import React from 'react'
import { getMovie } from '@/app/api/Moives'
// import { useSearchParams } from 'next/navigation'
import Movie from '../page'
import Image from "next/image";
import Link from 'next/link';

export default async function Page({ params }: { params: { id: string } }) {

    const Movies = await getMovie(params.id)
    const { id, title, type, synopsis } = Movies
    const ImgUrl = Movies?.backgroundImage?.url

    return (
        <>
            <div className='main pl-[15rem] pt-20 bg-white'>
                <div className='font-light text-4xl'>
                    <h4 className="m-5">
                        Webflix <span className=" text-red-600 font-semibold">\ {type} </span>
                    </h4>
                </div>
                <Image className='m-5 shadow-2xl rounded-2xl' src={ImgUrl} alt="title" width={600} height={500} />
                <div className='m-5'>
                    <h2 className="text-4xl font-extrabold mt-10">
                        {title}
                    </h2>
                    <div className='text-xl mt-10'>
                        {synopsis}
                    </div>
                </div>
            </div>
        </>
    )
}
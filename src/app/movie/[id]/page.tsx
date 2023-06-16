// "use client"
import React from 'react'
import { getMovie } from '@/app/api/Moives'
// import { useSearchParams } from 'next/navigation'
import Movie from '../page'
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {

    const Movies = await getMovie(params.id)
    const { id, title, type, synopsis } = Movies
    const ImgUrl = Movies?.backgroundImage?.url

    return (
        <>
            <div className="card bg-base-100 shadow-xl m-6">
                <figure className=" rounded-md">
                    {/* <Image loader={() => { return ImgUrl }} src={ImgUrl} alt={title} width={400} height={400} /> */}
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title">{title}</h2>
                    <p className="multine-ellipsis mt-2">{synopsis}</p>

                </div>
            </div>
        </>
    )
}
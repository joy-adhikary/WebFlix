import React from 'react';
import MovieCards from '../Components/movieCards';
import { getMovies } from '@/app/api/Moives'
import { getMovie } from '@/app/api/Moives'

export default async function Movie() {

    const AllMoives = await getMovies()

    return (
        <>
            <div className='mt-10 mb-5 font-bold text-3xl flex justify-center'>
                Series and Movies
            </div>
            <div className="max-w-[84rem] grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center lg:mx-auto">
                {
                    AllMoives?.map((item: any) => {
                        return (
                            <MovieCards key={item.id} {...item} />
                        );
                    })
                }
            </div>
        </>
    )
}

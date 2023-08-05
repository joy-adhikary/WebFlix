import { getMovies } from '@/app/api/Moives';
import React from 'react';
import Pagination from '../Components/Pagination';
import MovieCards from '../Components/movieCards';

export default async function Movie({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    // await new Promise(resolve => setTimeout(resolve,20000))

    const CurrentPage = searchParams['page'] ?? '1'
    const dataPerpage = 8
    const offset = (Number(CurrentPage) - 1) * dataPerpage
    // const limit = offset + (dataPerpage)

    let AllMoives = await getMovies(dataPerpage,offset)

    return (
        <>
            <div className='mt-10 mb-5 font-bold text-4xl flex justify-center'>
                Series & Movies
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
            <Pagination />
        </>
    )
}

import React from 'react';
import MovieCards from '../Components/movieCards';

export default async function Movie() {

    const url = process.env.Url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RapidAPI,
            'X-RapidAPI-Host': process.env.RapidAPIHost,
        }
    };

    // Server Side Api Call 

    const response = await fetch(url, options);
    const data = await response.json();
    const newData = data.titles

    return (
        <>
            <div className='mt-10 mb-5 font-bold text-3xl flex justify-center'>
                Series and Movies
            </div>
            <div className="max-w-[84rem] grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center lg:mx-auto">
                {
                    newData?.map((item: any) => {
                        return (
                            <MovieCards key={item.id} {...item} />
                        );
                    })
                }
            </div>
        </>
    )
}

import React from 'react';
import MovieCards from '../Components/movieCards';

export default function Movie() {

    const url = process.env.Url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RapidAPI,
            'X-RapidAPI-Host': process.env.RapidAPIHost,
        }
    };

    // Server Side Api Call 
    async function fetchData() {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data)

        } catch (error) {
            console.error("Error:", error);
        }
    }
    fetchData();


    return (
        <>
        <MovieCards/>
        </>
    )
}

import axios from "axios";


const AllUrl = process.env.AllUrl;
const Url = process.env.Url;
const paginations = process.env.Pagination;

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.RapidAPI,
        "X-RapidAPI-Host": process.env.RapidAPIHost,
    },
};

export async function getMovies(DataPerPage: number,offset: number) {
    const response = await fetch(`https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=${DataPerPage}&limit_suggestions=20&lang=en`, options);
    const data = await response.json();
    const newData = data.titles;

    return newData;
}


export async function getMovie(id: string) {
    const response = await fetch(`${Url}ids=${id}&len=en`, options);
    const data = await response.json();
    const newData = data[0].details;
    return newData;
}

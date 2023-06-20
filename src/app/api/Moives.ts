const AllUrl = process.env.AllUrl;
const Url = process.env.Url;

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.RapidAPI,
        "X-RapidAPI-Host": process.env.RapidAPIHost,
    },
};

export async function getMovies() {
    const response = await fetch(AllUrl, options);
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

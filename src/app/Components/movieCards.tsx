"use client"
import Image from "next/image";
import '@/app/globals.css'
// import '../../app/globals.css'

export default function MovieCards(props: any) {

    const { id, title, type, synopsis } = props.jawSummary

    const ImgUrl = props?.jawSummary?.backgroundImage?.url
    // console.log(props)

    return (

            <div className="card bg-base-100 shadow-xl m-6">
                <figure className=" rounded-md">
                    <Image loader={() => { return ImgUrl }} src={ImgUrl} alt={title} width={400} height={400}/>
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title">{title}</h2>
                    <p className="multine-ellipsis mt-2">{synopsis}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary mt-2 hover:bg-gray-200 hover:text-blue-800 hover:font-bold">Watch Now</button>
                    </div>
                </div>
            </div>

    );
}
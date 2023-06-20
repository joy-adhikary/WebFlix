"use client"
import Image from "next/image";
import '@/app/globals.css'
import Link from "next/link";
// import '../../app/globals.css'

export default function MovieCards(props: any) {

    const { id, title, type, synopsis } = props.jawSummary

    const ImgUrl = props?.jawSummary?.backgroundImage?.url
    
    return (

        <div className="card bg-base-100 shadow-xl m-6">
            <figure className=" rounded-md">
                <Image loader={() => { return ImgUrl }} src={ImgUrl} alt={title} width={400} height={400} />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title mt-2">{title.substring(0,20)}...</h2>
                <p className="multine-ellipsis mt-2">{synopsis}</p>
                <div className="card-actions justify-center mt-2">
                    <Link href={`/movie/${id}`}>
                        <button className="btn btn-primary mt-2 hover:bg-gray-200 hover:text-blue-800 hover:font-bold">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
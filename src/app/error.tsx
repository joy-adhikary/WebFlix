"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset, }: {
        error: Error;
        reset: () => void;
    }) {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="w-full h-[30rem] grid place-content-center text-3xl text-black font-bold">
            <h2 className=" text-red-500">Ops !!! Something went wrong </h2>
            <Link href="/" className=" mt-8 w-48 btn btn-primary m-auto">Go Back To Home </Link>
        </div>
    );
}

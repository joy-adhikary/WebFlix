'use client'
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import Link from 'next/link';
import React from 'react';
import { getMovies } from '../api/Moives';
import { useRouter } from 'next/navigation';

const App = () => {

    const router = useRouter()

    const onChange: PaginationProps['onChange'] = async (pageNumber) => {
        router.push(`/movie/?page=${pageNumber}`);
    }

    // console.log('data',props.data)

    return (
        <>
            <div className='flex justify-center mb-6 mt-4 font-bold'>
                <Pagination showSizeChanger={false} pageSize={8} defaultCurrent={1} total={177} onChange={onChange} />
            </div>

        </>
    )
};

export default App;
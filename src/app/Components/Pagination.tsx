'use client'
import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import Link from 'next/link';
import { getMovies } from '../api/Moives';

const App = (props: any) => {

    const onChange: PaginationProps['onChange'] = async(pageNumber) => {
        console.log('Page: ', pageNumber)
        // props.Data = await getMovies()
    }
    // console.log('Movie: ', props.Data)
    return (
        <>
            <div className='flex justify-center mb-6 mt-4 font-bold'>
                <Pagination showSizeChanger={false} pageSize={8} defaultCurrent={1} total={177} onChange={onChange} />
            </div>

        </>
    )
};

export default App;
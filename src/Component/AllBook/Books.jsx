import React, { useEffect, useState } from 'react'
import SingleBook from './SingleBook'

export default function Books() {



    // data set
    const [books, setBooks] = useState([])
    // fetch data json called;
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (


        <div className='container m-auto px-2 py-10 '>
            <div className='flex justify-center py-5'>
                <h2 className='text-xl lg:text-3xl font-bold'>Books</h2>
            </div>

            {/* fetch data map here */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map(book => <SingleBook
                        key={book.bookId} book={book} ></SingleBook>)
                }
            </div>
        </div>

    )
}


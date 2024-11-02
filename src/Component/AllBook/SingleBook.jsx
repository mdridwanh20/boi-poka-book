import React from 'react'
import { Link } from 'react-router-dom';

export default function SingleBook({ book }) {
    // console.log(book);

    //book information get by books;
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <Link to={`/books/${bookId}`}>

            <div className='p-5 rounded-md border space-y-1'>

                <div className='py-8 bg-slate-200 rounded-md flex items-center justify-center'>
                    <img
                        className='w-24 h-36 object-cover'
                        src={image} alt="" />
                </div>

                <div className='pt-2'>
                    <div className='flex justify-between items-center'>
                        {
                            tags.map((tag, index) => <button 
                            key={index} className='bg-blue-100 px-4 py-1 rounded-md'> 
                            {tag} </button>)
                        }
                    </div>
                    <div className='py-2'>
                        <h2 className='font-semibold '> {bookName} </h2>
                        <h2 className='font-medium text-gray-500'> {author} </h2>
                    </div>

                    <div className='border border-double bg-gray-200'></div>

                    <div className=' pt-3  flex justify-between items-center'>
                        <p> {category} </p>

                        <div className='flex items-center space-x-2'>
                            <h2> {rating} </h2>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="w-4 mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="w-4 mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="w-4 mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="w-4 mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="w-4 mask mask-star-2 bg-green-500" />
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </Link>
    )
}

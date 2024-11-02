import React, { useState } from 'react'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'


export default function BookDetails() {

  const [isActive, setIsActive] = useState(true);
  const handlerButton = () =>{
    setIsActive(!isActive)
  }




  const { bookId } = useParams()
  // books data load: from json;

  const data = useLoaderData()
  // bookId number convert;
  const id = parseInt(bookId)
  const book = data.find(book => book.bookId === id);

  const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  return (

    <div className="card rounded-none p-0 max-w-5xl my-16 m-auto lg:card-side bg-base-100 ">

      <figure className='bg-slate-200 p-10 '>
        <img
          src={image}
          className='lg:w-64'
          alt="Album" />
      </figure>

{/* card body here */}
      <div className="px-10 py-8 lg:py-0 lg:w-2/3 space-y-2">
              <div className=''>
                <h2 className='font-bold text-2xl'> {bookName} </h2>
                <h2 className='font-medium text-gray-500'> {author} </h2>
              </div>

              <hr />

                <p> {category} : </p>
              <p className='text-[14px]'> <span className='font-medium'>Review:</span> {review} </p>

              <div className='flex space-x-4 items-center'>
                <h2 className='font-medium'>Tags: </h2>
                {
                  tags.map((tag, index) => <button
                    key={index} className='bg-green-100 px-3 py-1 rounded-full'> #
                    {tag} </button>)
                }
              </div>

{/* book number tag on the below text */}
            <div className='w-full lg:w-1/2 py-3 space-y-2'>

                    <div className='flex justify-between'>
                      <p className='text-gray-600 text-[15px]'>Number Of pages:</p>
                      <p className='font-semibold text-[15px]'> {totalPages} </p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='text-gray-600 text-[15px]'>Publisher:</p>
                      <p className='font-semibold text-[15px]'> {publisher} </p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='text-gray-600 text-[15px]'>Year Of Publishing:</p>
                      <p className='font-semibold text-[15px]'> {yearOfPublishing} </p>
                    </div>
                    <div className='flex justify-between'>
                      <p className='text-gray-600 text-[15px]'>Ratting:</p>
                      <p className='font-semibold text-[15px]'> {rating} </p>
                    </div>

            </div>

{/* button here */}
              <div className="details-button pe-2">

              <button 
                onClick={handlerButton} 
                className={`border border-blue-600 text-green-600 mr-3 text-[15px] 
                    px-3 lg:text-lg lg:px-8 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : ''} `} > Read
              </button>

              <button 
                onClick={handlerButton} 
                className={`border border-blue-600 text-green-600 mr-3 text-[15px] 
                    px-3 lg:text-lg lg:px-8 py-2 rounded-md ${isActive ? '' : 'bg-blue-600 text-white'} `} > Wishlist
              </button>

              

                  
              </div>

      </div>

    </div>

  )
}

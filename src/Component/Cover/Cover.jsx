import React from 'react'
import CoverImg from '../../assets/pngwing 1.png';
import { NavLink } from 'react-router-dom';

export default function Cover() {



    return (

        <div className="hero bg-base-200 h-[700px] py-5 ">
            <div className="hero-content max-w-screen-lg m-auto flex-col lg:flex-row-reverse">
                <img
                    src={CoverImg}
                    className="w-full lg:max-w-sm rounded-lg" />
                <div className='space-y-2'>
                    <h1 className="text-3xl lg:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <p className="py-2">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>

                    <button>
                        <NavLink 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md" to="/books">View The List
                        </NavLink>
                    </button>

                    

                </div>
            </div>
        </div>

    )
}

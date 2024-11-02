import React from 'react'
import Img from '../../assets/sign-up-img.png'

export default function SignUp() {
    return (
        <div>
            <div className="hero max-w-4xl  m-auto min-h-screen">

                <div className="">

                    <div className=" shadow-md rounded-md lg:max-w-2xl border  ">

                        <form className="card-body">

                            <div className=" lg:flex gap-4 items-center justify-between">

                                <div>
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="First Name" className=" w-64 focus:outline-none input input-bordered" required />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">Last name</span>
                                    </label>
                                    <input type="text" placeholder="Last name" className=" w-64 focus:outline-none input input-bordered" required />
                                </div>

                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="focus:outline-none input input-bordered" required />
                            </div>



                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" placeholder="Username" className="focus:outline-none input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">New Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="focus:outline-none input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn text-white bg-blue-500 hover:bg-blue-600">Login</button>
                            </div>

                        </form>

                    </div>


                </div>

            </div>
        </div>
    )
}

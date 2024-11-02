import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../assets/sign-up-img.png'

export default function SignIn() {
  return (
    <div>
      <div className="hero max-w-4xl m-auto min-h-screen">

        <div className="hero-content grid lg:grid-cols-2 gap-20">

          <div className="">
              <img
              className='lg:w-96'
              src={Img} alt="" />
          </div>

          <div className="card border bg-base-100 w-full max-w-sm shrink-0 ">

            <form className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="focus:outline-none input input-bordered" required />
              </div>

              <div className="form-control">

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" className="focus:outline-none input input-bordered" required />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>

              </div>

              <div className="form-control mt-6">
                <button className="btn text-white bg-green-500 hover:bg-green-600">Login</button>
              </div>

            </form>

          </div>


        </div>

      </div>
    </div>
  )
}

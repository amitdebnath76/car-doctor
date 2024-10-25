"use client";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const page = () => {
    const handelLogin= async ()=>{

    }
  
return (
        <div className="mt-16">
          <div className="grid grid-cols-2 container gap-12 px-16 items-center">
            <div>
              <Image
                height={450}
                width={450}
                src="assets/images/login/login.svg"
                alt="login image"
              ></Image>
            </div>
            <div className="border-2 p-10 rounded-xl">
              <h1 className="text-4xl text-center font-bold">Login Page</h1>
              <form onSubmit={handelLogin} className="space-y-3 mt-6">
                {/* <label htmlFor="name">Name</label>
                <br></br>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full  "
                />
                <br></br> */}
                <label htmlFor="email"> Email</label>
                <br></br>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full "
                />
                <br></br>
                <label htmlFor="password">Confirm Password</label>
                <br></br>
                <input
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full mb-3"
                />
                <br></br>
                <button type="submit" className="btn btn-primary w-full">Log In</button>
              </form>
              <div className="text-center mt-5">
                <p>Or Sign in with</p>
              </div>
              <div className="flex item-center justify-evenly">
                <button className="p-4 text-3xl bg-slate-200 rounded-full">
                  {" "}
                  <FcGoogle></FcGoogle>{" "}
                </button>
                <button className="p-4 text-3xl text-green-500  bg-slate-200 rounded-full">
                  <ImGithub></ImGithub>{" "}
                </button>
              </div>
              <div className="flex gap-3 item-center justify-center mt-4">
                <p className="text-center">Have an account? </p>
                <Link className="text-red-600 text-center font-extrabold text-xl" href="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default page
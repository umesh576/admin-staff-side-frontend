"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";

const loginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full bg-blue-400 absolute">
      <div className="w-full">
        <div className="flex justify-center items-center h-screen max-sm:block max-sm:h-180   ">
          <form
            action=""
            className=" w-1/2 flex justify-center py-3 max-sm:w-full max-sm:px-3 max-sm:mt-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className=" w-2/3  py-20 rounded-lg  bg-white max-sm:w-full">
              <div className="w-full">
                <h1 className="text-2xl text-center font-bold">Login</h1>
                <div className="w-full flex justify-center py-3">
                  <div className="w-2/3 max-sm:w-full max-sm:px-4">
                    {errors.email && (
                      <div className="text-red-500">{errors.email.message}</div>
                    )}
                    <div className="border w-full flex  py-3 px-2 rounded-lg  outline-none ">
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required for login.",
                          },
                          minLength: {
                            value: 3,
                            message: "Email has at least more than 3 character",
                          },
                          maxLength: 50,
                        })}
                        type="email"
                        className="outline-none w-full px-5"
                        placeholder="jhon@example.com"
                      />
                      <MdEmail className="text-2xl" />
                    </div>
                    {errors.password && (
                      <div className="text-red-500">
                        {errors.password.message}
                      </div>
                    )}
                    <div className="border w-full flex  py-3 px-2 rounded-lg  outline-none mt-5">
                      <input
                        {...register("password", {
                          required: {
                            value: true,
                            mesage: "Password is required for login.",
                          },
                          minLength: {
                            value: 6,
                            message: "Password have at least 6 character.",
                          },
                          maxLength: {
                            value: 20,
                            message: "Password have less than 20 character.",
                          },
                        })}
                        className="outline-none w-full px-5 "
                        placeholder="Enter paswword"
                        type="password"
                      />
                      <RiLockPasswordFill className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  ">
                <div className="flex w-full justify-center max-sm:px-5">
                  <button
                    type="submit"
                    className="bg-blue-500 w-2/3 mt-1 text-white px-3 py-2 rounded-lg max-sm:w-full "
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="text-center text-blue-500">
                <a href="/">forget password</a>
              </div>
              <div className="text-center text-blue-500">
                <a href="/signup">Don't have Account? Signup</a>
              </div>
              <div className=" w-full flex justify-center px-5 mt-4 max-sm:px-5">
                <div className="  w-2/3  flex px-5 items-center border-2  rounded-lg  hover:cursor-pointer max-sm:w-full">
                  <button
                    type="button"
                    className="bg-white w-2/3 text-black py-2 rounded-lg  hover:cursor-pointer max-sm:w-full"
                  >
                    Signup with Google
                  </button>
                  <FaGoogle className="text-2xl text-red-300" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default loginPage;

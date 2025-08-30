"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";

const page = () => {
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
    <div className="w-full bg-blue-400">
      <div className="w-full">
        <div className="flex justify-center items-center h-screen">
          <form
            action=""
            className=" w-full "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className=" w-1/2 p-3  bg-white">
              <div className="w-full">
                <h1 className="text-2xl text-center font-bold">Login</h1>
                <div className="w-full flex justify-center py-3">
                  <div className="w-1/2 ">
                    <div className="border w-full flex py-3 px-2 rounded-lg ">
                      {errors.email && (
                        <div className="text-red-500">
                          {errors.email.message}
                        </div>
                      )}
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
                        className="outline-none"
                        placeholder="jhon@example.com"
                      />
                      <MdOutlineMailOutline className="text-2xl" />
                    </div>
                    <div className="border py-3 mt-5 w-full px-2 flex rounded-lg outline-none">
                      {errors.password && (
                        <div className="text-red-500">
                          {errors.password.message}
                        </div>
                      )}
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
                        className="outline-none w-full"
                        placeholder="Enter paswword"
                        type="password"
                      />
                      <RiLockPasswordFill />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center ">
                <button
                  type="submit"
                  className="bg-blue-500 w-1/2 text-white px-3 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
              <div className="text-center text-blue-500">
                <a href="/">forget password</a>
              </div>
              <div className="text-center text-blue-500">
                <a href="/signup">Don't have Account? Signup</a>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center border-2 w-1/2 rounded-lg ">
                  <button className="bg-white w-1/2 text-black px-3 py-2 rounded-lg">
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

export default page;

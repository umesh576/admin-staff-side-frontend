"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schema/registerSchema";
import Select from "react-select";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  // const [selectGender, setSelectGender] = useState(null);

  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "No other options" },
  ];

  const [profile, setProfile] = useState(null);

  // const handleChange = (options) => {
  //   setSelectGender(options);
  //   console.log(options);
  // };
  const handleProfile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfile(URL.createObjectURL(file));
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="absolute  w-full bg-sky-300">
      <div className="w-full py-20 max-sm:py-10 flex justify-center items-center">
        <div className="w-1/2 max-sm:w-full max-sm:p-5 ">
          <div className="bg-white w-full px-4 py-3">
            <div className="w-full flex justify-center ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full justify-center"
              >
                <div>
                  <div>
                    <h1 className="text-3xl font-bold text-center">Signup</h1>
                  </div>
                  <div className="flex w-full justify-center">
                    <div className="w-full">
                      <div className="w-full">
                        <div>
                          {errors.profilePicture && (
                            <div className="text-red-500">
                              {errors.profilePicture.message}
                            </div>
                          )}

                          <div className=" py-5">
                            {/* {profile ? (
                            <div className="mt-4 w-44  border flex items-center justify-center overflow-hidden rounded-lg shadow">
                              <img
                                src={profile}
                                alt="profile"
                                className="object-cover w-full h-full"
                              />
                            </div>
                          ) : ( */}
                            <div>
                              <div className="flex justify-center py-2">
                                <div className="relative w-50 h-50">
                                  {" "}
                                  {/* ✅ must be relative */}
                                  <Image
                                    src={profile || "/image.jpg"}
                                    alt="image"
                                    fill
                                    className="object-cover border-2 border-black rounded-full border-dotted cursor-pointer"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* )} */}
                            <div className="flex justify-center">
                              <input
                                type="file"
                                placeholder="Imput file"
                                {...register("profilePicture")}
                                onChange={handleProfile}
                                className=" px-3 py-3 border-2 border-black border-dotted max-sm:w-1/2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" w-full flex flex-warp  gap-2 max-sm:block ">
                        <div className="w-full max-sm:py-4">
                          {errors.firstName && (
                            <div className="text-red-500">
                              {errors.firstName.message}
                            </div>
                          )}
                          <div className="flex justify-around items-center border px-3 py-2 rounded-lg w-full ">
                            <input
                              type="text"
                              placeholder="Firstname"
                              {...register("firstName")}
                              className="outline-none w-full"
                            />
                            <CgProfile />
                          </div>
                        </div>
                        <div className="w-full">
                          <div>
                            {errors.lastName && (
                              <div className="text-red-500">
                                {errors.lastName.message}
                              </div>
                            )}
                            <div className="flex justify-around items-center border px-3 py-2 rounded-lg w-full">
                              <input
                                type="text"
                                placeholder="lastName"
                                {...register("lastName")}
                                className="outline-none w-full"
                              />
                              <CgProfile />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/3 max-sm:w-full py-4 ">
                        <div className="w-full">
                          {errors.email && (
                            <div className="text-red-500">
                              {errors.email.message}
                            </div>
                          )}
                          <div className="flex justify-between border items-center p-2 rounded-lg">
                            <input
                              type="email"
                              placeholder="jhon@gmail.com"
                              {...register("email")}
                              className="w-full outline-none"
                            />
                            <MdEmail />
                          </div>
                        </div>
                      </div>
                      <div className="w-full ">
                        {errors.password && (
                          <div className="text-red-500">
                            {errors.password.message}
                          </div>
                        )}
                        <div className="w-2/3 max-sm:w-full p-2 border rounded-lg">
                          <input
                            className="w-full outline-none"
                            type="password"
                            placeholder="password"
                            {...register("password")}
                          />
                        </div>
                      </div>
                      <div className="w-full py-4">
                        {errors.confirmpassword && (
                          <div className="text-red-500">
                            {errors.confirmpassword.message}
                          </div>
                        )}
                        <div className="w-2/3 max-sm:w-full p-2 border rounded-lg">
                          <input
                            type="password"
                            placeholder="conform password"
                            {...register("confirmpassword")}
                            className="w-full outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        {errors.gender && (
                          <div className="text-red-500">
                            {errors.gender.message}
                          </div>
                        )}
                      </div>

                      <div className="w-2/3 max-sm:w-full">
                        <div>
                          <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                              <Select
                                instanceId="gender"
                                inputId="gender-id"
                                {...register("gender")}
                                options={options}
                                value={
                                  options.find(
                                    (o) => o.value === field.value
                                  ) || null
                                }
                                onChange={(val) => field.onChange(val?.value)}
                                placeholder="Select gender"
                                className="outline-none"
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className="w-full py-4">
                        <div>
                          {errors.phoneNumber && (
                            <div className="text-red-500">
                              {errors.phoneNumber.message}
                            </div>
                          )}

                          <div className="w-2/3 max-sm:w-full border rounded-lg p-2">
                            <input
                              type="number"
                              {...register("phoneNumber")}
                              placeholder="Phone Number"
                              className="outline-none w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full">
                      <p className="text-blue-500">
                        <a href="/login">Already Login? login</a>
                      </p>
                    </div>
                  </div>
                  <div className="w-full py-2">
                    <div className="w-full">
                      <button
                        type="submit"
                        className=" w-full bg-blue-700 text-white hover:bg-blue-500 cursor-pointer rounded-lg px-2 py-3 border"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full">
              <button className="w-full border py-2 rounded-lg">
                Sign up with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

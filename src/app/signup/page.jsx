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
    setProfile(URL.createObjectURL(file));
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="absolute h-screen w-full bg-sky-300">
      <div className="w-full h-full  flex justify-center items-center">
        <div className="w-1/2 ">
          <div className="bg-white w-full h-full px-4 py-3">
            <div className="w-full flex justify-center ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full justify-center"
              >
                <div>
                  <div>
                    <h1 className="text-3xl font-bold text-center">Signup</h1>
                  </div>
                  <div>
                    <div>
                      <div>
                        {errors.profilePicture && (
                          <div>{errors.profilePicture.message}</div>
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
                              <Image
                                src={profile || "/image.jpg"}
                                alt="image"
                                width={150}
                                height={150}
                                className="border-2 border-black rounded-full border-dotted cursor-pointer "
                              />
                            </div>
                          </div>
                          {/* )} */}
                          <div className="flex justify-center">
                            <input
                              type="file"
                              placeholder="Imput file"
                              {...register("profilePicture")}
                              onChange={handleProfile}
                              className=" px-3 py-3 border-2 border-black border-dotted "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-warp gap-2 w-full">
                      <div className="w-full">
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
                    <div className="w-2/3  py-4">
                      <div>
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
                          />
                          <MdEmail />
                        </div>
                      </div>
                    </div>
                    <div>
                      {errors.password && (
                        <div className="text-red-500">
                          {errors.password.message}
                        </div>
                      )}
                      <div>
                        <input
                          type="password"
                          placeholder="password"
                          {...register("password")}
                        />
                      </div>
                    </div>
                    <div>
                      {errors.confirmpassword && (
                        <div className="text-red-500">
                          {errors.confirmpassword.message}
                        </div>
                      )}
                      <div>
                        <input
                          type="password"
                          placeholder="conform password"
                          {...register("confirmpassword")}
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

                    <div>
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
                                options.find((o) => o.value === field.value) ||
                                null
                              }
                              onChange={(val) => field.onChange(val?.value)}
                              placeholder="Select gender"
                              className="outline-none"
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          <input
                            type="number"
                            {...register("phonenumber")}
                            placeholder="98*****890"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>
                        <a href="/login">Already Login</a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button type="submit">Register</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <button>Sign up with google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

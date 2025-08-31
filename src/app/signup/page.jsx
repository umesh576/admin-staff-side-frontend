"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schema/registerSchema";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [profile, setProfile] = useState(null);

  const handleProfile = (e) => {
    const file = e.target.files[0];
    setProfile(URL.createObjectURL(file));
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="absolute h-screen w-full bg-sky-300">
      <div className="w-full">
        <div className="w-full flex absolute justify-center items-center h-full">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white"
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

                    <div>
                      {profile ? (
                        <div className="mt-4 w-44  border flex items-center justify-center overflow-hidden rounded-lg shadow">
                          <img
                            src={profile}
                            alt="profile"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <p>this is image feild</p>
                      )}
                      <div className="">
                        <input
                          type="file"
                          {...register("profilePicture")}
                          onChange={handleProfile}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-warp">
                  <div>
                    {errors.firstName && (
                      <div className="text-red-500">
                        {errors.firstName.message}
                      </div>
                    )}
                    <div className="flex justify-around items-center">
                      <input
                        type="text"
                        placeholder="Firstname"
                        {...register("firstName")}
                      />
                      <CgProfile />
                    </div>
                  </div>
                  <div>
                    <div>
                      {errors.lastName && (
                        <div className="text-red-500">
                          {errors.lastName.message}
                        </div>
                      )}
                      <div className="flex justify-around items-center">
                        <input
                          type="text"
                          placeholder="lastName"
                          {...register("lastName")}
                        />
                        <CgProfile />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    {errors.email && (
                      <div className="text-red-500">{errors.email.message}</div>
                    )}
                    <div>
                      <input
                        type="email"
                        placeholder="jhon@gmail.com"
                        {...register("email")}
                      />
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
                <div>{errors.gender && <div>{errors.gender.message}</div>}</div>
                <div>
                  <input type="text" {...register("gender")} />
                  <select name="gender" id="gender">
                    <option value="Male">Male</option>
                    <option value="Male">Female</option>
                  </select>
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
      </div>
    </div>
  );
};

export default SignupPage;

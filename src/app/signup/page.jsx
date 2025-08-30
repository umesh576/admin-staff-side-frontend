"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { yupResolver } from "./../../../node_modules/@hookform/resolvers/yup/src/yup";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log("umesh");
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
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required for login.",
                          },
                        })}
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
                    <div>{errors.confirmpassword.message}</div>
                  )}
                  <div>
                    <input
                      type="password"
                      placeholder="conform password"
                      {...register("confirmpassword")}
                    />
                  </div>
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

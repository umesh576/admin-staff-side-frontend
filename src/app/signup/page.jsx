"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";

const SignupPage = () => {
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
                        {...register("firstName", {
                          required: {
                            value: true,
                            message: "Firstname required for signup",
                          },
                          minLength: {
                            value: 3,
                            message:
                              "Minimun 3 character are necessary for register.",
                          },
                          maxLength: {
                            value: 30,
                            message:
                              "Maximun 30 character only allow for register.",
                          },
                        })}
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
                          {...register("lastName", {
                            required: {
                              value: true,
                              message: "lastName required for signup",
                            },
                            minLength: {
                              value: 3,
                              message:
                                "Minimun 3 character are necessary for register.",
                            },
                            maxLength: {
                              value: 30,
                              message:
                                "Maximun 30 character only allow for register.",
                            },
                          })}
                        />
                        <CgProfile />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    {errors.email && <div>{errors.email.message}</div>}
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
                  {errors.password && <div>{errors.password.message}</div>}
                  <div>
                    <input
                      type="password"
                      placeholder="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Password is more than 6 character.",
                        },
                        maxLength: {
                          value: 100,
                          message: "Password is less than 100 character.",
                        },
                      })}
                    />
                  </div>
                </div>
                {/* <div>
                  {errors.confirmPassword && (
                    <div>{errors.confirmPassword.message}</div>
                  )}
                  <div>
                    <input
                      type="password"
                      placeholder="conform password"
                      {...register("confirmPassword", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Password is more than 6 character.",
                        },
                        maxLength: {
                          value: 100,
                          message: "Passoword is less than 100 character.",
                        },
                        validate: (value) =>
                          value === password || "password doen't match",
                      })}
                    />
                  </div>
                </div> */}
              </div>
              <div>
                <div>
                  <button>Register</button>
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

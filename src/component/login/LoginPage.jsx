import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
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
    <div className="flex justify-center items-center h-screen">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="border p-3">
          <div>
            <h1 className="text-2xl text-center font-bold">Login</h1>
            <div className="w-full flex justify-center py-3">
              <div>
                <div className="py-2">
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
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
                    className="border py-1 px-2 rounded-lg"
                    type="email"
                    placeholder="jhon@example.com"
                  />
                </div>
                <div className="py-2">
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
                    className="border py-1 px-2 rounded-lg"
                    placeholder="Enter paswword"
                    type="password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="/">forget password</a>
          </div>
          <div className="w-full flex justify-center ">
            <button
              type="submit"
              className="bg-blue-500 w-1/2 text-white px-3 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

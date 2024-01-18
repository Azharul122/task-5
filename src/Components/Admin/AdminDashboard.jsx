import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

const AdminDashboard = () => {

  const location=useLocation()
  console.log(location)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-[96%] md:w-[90%] mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="craet-user md:border-r border-gray-200 flex justify-center items-center">
            <div className="h-full w-full md:w-[440px] px-2 flex flex-col gap-10  justify-center items-center">
              <p className="text-2xl">Create User</p>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <input
                  placeholder="Enter userID"
                  className="border w-full py-3 px-2 outline-none mb-3"
                  {...register("userId", {
                    required: "User ID Address is required",
                  })}
                />
                {errors.mail && <p role="alert">{errors.userId.message}</p>}
                <input
                  type="password"
                  placeholder="Enter password"
                  className="border w-full py-3 px-2 outline-none mb-5"
                  {...register("password", {
                    required: "User ID Address is required",
                  })}
                />
                {errors.mail && <p>{errors.userId.message}</p>}
                <Link
                  to={"/user-login"}
                  className="py-3 block text-white font-bold bg-gradient-to-r w-full from-blue-100 to-blue-400 justify-center text-center"
                >
                  Submit
                </Link>
              </form>
            </div>
          </div>
          <div className="users flex flex-col justify-center items-center">
            <p className="mb-14 text-2xl">View User</p>
            <div className="mb-5 user-container py-5 bg-gray-300 w-[80%] relative flex justify-center items-center">
              <div className="w-[80%] bg-white h-[50px] flex items-center">
                56565
              </div>
              <div className="absolute h-[20px] w-[20px] bg-blue-500 flex justify-center items-center text-white rounded-full top-2 right-2">
                1
              </div>
            </div>
            <div className="mb-7 user-container py-5 bg-gray-300 w-[80%] relative flex justify-center items-center">
              <div className="w-[80%] bg-white h-[50px] flex items-center">
                56565
              </div>
              <div className="absolute h-[20px] w-[20px] bg-blue-500 flex justify-center items-center text-white rounded-full top-2 right-2">
                1
              </div>
              <Link
                to={"/all-user"}
                className="bg-blue-700 px-7 absolute -bottom-14 py-2 text-white rounded right-0"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

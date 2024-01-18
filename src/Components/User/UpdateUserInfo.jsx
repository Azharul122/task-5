import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UpdateUserInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-[96%] md:w-[90%] mx-auto h-full ">
        {show && (
          <div className="absolute top-5 right-5 z-30">
            <Link
              onClick={() => setShow(false)}
              className="bg-blue-500 border-blue-500  gap-2 items-center px-7  py-2 text-white rounded"
            >
              Back
            </Link>
          </div>
        )}
        {show && (
          <div className=" absolute shadow-2xl top-0 right-0 bg-white z-20 h-screen w-full md:w-[440px] px-2 flex flex-col gap-10  justify-center items-center">
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
              <p className="text-red-300 font-bold text-center">
                Not approved by admin
              </p>
            </form>
          </div>
        )}
        <div className="absolute top-5 right-5 z-10">
          <Link
            onClick={() => setShow(true)}
            className="bg-blue-500 border-blue-500  gap-2 items-center px-7  py-2 text-white rounded"
          >
            View
          </Link>
        </div>
        <div
          className={`relative  flex justify-center items-center h-full ${
            show ? "filter blur " : ""
          }`}
        >
          <div className="h-full w-full md:w-[440px] px-2 flex flex-col gap-10  justify-center items-center">
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
                className="border w-full py-20 bg-slate-400 px-2 outline-none mb-5 "
                {...register("password", {
                  required: "User ID Address is required",
                })}
              />
              {errors.mail && <p>{errors.userId.message}</p>}
              <Link
                to={"/all-user"}
                className="py-3 block text-white font-bold bg-gradient-to-r w-full from-blue-100 to-blue-400 justify-center text-center"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserInfo;

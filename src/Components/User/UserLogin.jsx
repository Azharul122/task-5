import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UserLogin = () => {
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
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full ">
          <div className=" w-full flex justify-center items-center h-full bg-gradient-to-r from-blue-800 to-blue-200">
            <div className="1st-circle h-[456px] relative flex justify-center items-center w-[456px] border-4 rounded-full border-blue-500">
              <div className="2nd h-[356px] w-[356px] border-4 rounded-full border-blue-500">
                <div className="logo-container w-[90%] bg-white text-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="flex  items-center justify-center py-7">
                    <p className="text-2xl text-blue-500">LOGO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* from */}
          <div className="h-full w-full md:w-[440px] px-2 flex flex-col gap-10 border justify-center items-center">
            <p className="text-2xl">User Login</p>
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
                to={"/update-user"}
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

export default UserLogin;

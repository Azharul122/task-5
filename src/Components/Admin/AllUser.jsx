import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const AllUser = () => {
  return (
    <div>
      <div className="w-full h-screen overflow-hidden py-10">
        <div className="w-[96%] md:w-[90%] mx-auto h-full">
          <div className="">
            <Link
              to={"/admin-dashboard"}
              className="bg-blue-500 border-blue-500  gap-2 items-center px-7  py-2 text-white rounded"
            >
              Back
             
            </Link>
            <div className="user-table mt-5">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        User Id
                      </th>
                      <th
                        scope="col"
                        className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Photo
                      </th>
                      <th
                        scope="col"
                        className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* <!-- Table rows go here --> */}
                    <tr>
                      <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                        John Doe
                      </td>
                      <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                        john.doe@example.com
                      </td>
                      <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                        Admin
                      </td>
                      <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                        Admin
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                        John Doe
                      </td>
                      <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                        john.doe@example.com
                      </td>
                      <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                        Admin
                      </td>
                      <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                        Admin
                      </td>
                    </tr>
                    {/* <!-- Add more rows as needed --> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;

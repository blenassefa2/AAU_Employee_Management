import Layout from "@/components/Layout/Layout";
import {
  useDownloadMutation,
  useGetAllUsersQuery,
} from "@/redux/slices/users/usersApiSlice";
import React, { useState } from "react";
import { TiDownload } from "react-icons/ti";

type Employee = {
  id: number;
  firstName: string;
  password: string;
  role: string;
  status: string;
};

const EmployeeTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError, isSuccess } = useGetAllUsersQuery({});
  const [downloadNow, setDownloadNow] = useState(false);
  const [download] = useDownloadMutation();
  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <Layout page="hrexpert">
          <>Loading</>
        </Layout>
      </div>
    );
  }
  if (!isSuccess) {
    return (
      <div className="bg-white min-h-screen">
        <Layout page="hrexpert">
          <></>
        </Layout>
      </div>
    );
  }
  const employees: Employee[] = data.data;

  const filteredEmployees = employees.filter((employee, index) =>
    employee.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <Layout page="hrexpert">
        <div className="bg-white text-black p-4">
          <span className="flex justify">
            <button
              onClick={async () => {
                await download({});
              }}
              className="bg-primary inline-block  mb-4 text-white py-2 px-4 rounded-lg flex items-center"
            >
              <TiDownload className="h-5 w-5 mr-1" />
              Download
            </button>
            <input
              type="text"
              placeholder="Search employees"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4 p-2 border ml-[70%] inline-block border-gray-300 rounded"
            />
          </span>
          <div className="overflow-y-hidden h-300">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-2 border border-gray-300">ID Number</th>
                  <th className="p-2 border border-gray-300">Name</th>
                  <th className="p-2 border border-gray-300">Password</th>
                  <th className="p-2 border border-gray-300">Department</th>
                  <th className="p-2 border border-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="p-2 border border-gray-300">
                      {employee.id}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {employee.firstName}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {employee.password}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {employee.role}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {employee.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EmployeeTable;

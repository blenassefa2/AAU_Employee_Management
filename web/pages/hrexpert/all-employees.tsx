import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";

type Employee = {
  id: number;
  name: string;
  password: string;
  department: string;
  status: string;
};

const employees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    password: "password123",
    department: "HR",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Doe",
    password: "password456",
    department: "Marketing",
    status: "inactive",
  },
  {
    id: 1,
    name: "John Doe",
    password: "password123",
    department: "HR",
    status: "active",
  },

  // Add more employees here
];

const EmployeeTable = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white h-screen">
      <Layout page="hrexpert">
        <div className="bg-white text-black p-4">
          <input
            type="text"
            placeholder="Search employees"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
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
                      {employee.name}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {employee.password}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {employee.department}
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

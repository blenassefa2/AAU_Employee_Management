// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faKey, faCheck } from '@fortawesome/free-solid-svg-icons';

// const AllEmployees = () => {
//   const data = [
//     {
//       id: 1,
//       name: 'John Doe',
//       employeeId: 'EMP001',
//       department: 'Sales',
//       password: '********',
//       status: 'Active',
//     },
//     // Add more employee data as needed
//   ];

//   return (
//     <div>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 text-left font-bold">Name</th>
//             <th className="px-4 py-2 text-left font-bold">ID No</th>
//             <th className="px-4 py-2 text-left font-bold">Department</th>
//             <th className="px-4 py-2 text-left font-bold">Password</th>
//             <th className="px-4 py-2 text-left font-bold">Status</th>
//             <th className="px-4 py-2 text-left font-bold">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white">
//           {data.map((employee) => (
//             <tr key={employee.id} className="border-b">
//               <td className="px-4 py-2">{employee.name}</td>
//               <td className="px-4 py-2">{employee.employeeId}</td>
//               <td className="px-4 py-2">{employee.department}</td>
//               <td className="px-4 py-2">{employee.password}</td>
//               <td className="px-4 py-2">{employee.status}</td>
//               <td className="px-4 py-2">
//                 <div className="flex space-x-2">
//                   <FontAwesomeIcon icon={faEye} title="View Details" />
//                   <FontAwesomeIcon icon={faKey} title="Reset Password" />
//                   <FontAwesomeIcon icon={faCheck} title="Activate Employee" />
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllEmployees;

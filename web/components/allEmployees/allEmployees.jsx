import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai;
import { useEffect,useState } from 'react';
import DataTable from 'react-data-table-component';

const allEmployee = () => {
const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };
  const [pending, setPending] =useState(true);
	const [rows, setRows] = useState([]);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(data);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        selectable: true,
    },
    {
        name: 'ID NO.',
        selector: row => row.department,
        selectable: true,
    },
    {
        name: 'Department',
        selector: row => row.id,
        selectable: true,
    },
    {
        name: 'Password',
        selector: row => row.password,
        selectable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        selectable: true,
    },
];

const data = [
    {
        name: 'john wick',
        id: 'AAU/1234',
        department:'HR Manager',
        password: '******',
        status: 'Active',
    },
     {
        name: 'john wick',
        id: 'AAU/1234',
        department:'HR Manager',
        password: '******',
        status: 'Active',
    },
     {
        name: 'john wick',
        id: 'AAU/1234',
        department:'HR Manager',
        password: '******',
        status: 'Active',
    },
     {
        name: 'john wick',
        id: 'AAU/1234',
        department:'HR Manager',
        password: '******',
        status: 'Active',
    },
     {
        name: 'john wick',
        id: 'AAU/1234',
        department:'HR Manager',
        password: '******',
        status: 'Active',
    },
     {
        name: 'john wick',
        id: 'AAU/1234',
        department:'HR Manager',
        password: '******',
        status: 'Active',
    },
]
 
  return ( 
    <>
    <div className="flex pr-4 bg-white border-gray-700 rounded-md">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 pl-4 bg-transparent outline-none"
                placeholder="Search from Tasks"
              />
              <AiOutlineSearch className="w-6 h-auto" />
            </div>
   <DataTable
            columns={columns}
            data={data}
            selectableRows
            selectableRowsSelected= {handleChange}
            progressPending={pending}
            pagination
        />
        </>
   );
}
 
export default allEmployee;
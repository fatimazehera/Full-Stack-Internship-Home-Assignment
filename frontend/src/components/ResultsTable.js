import { useState, useEffect } from 'react';

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/employees/list")
      .then(res => res.json())
      .then((result) => { setEmployeeData(result); })
    console.log(employeeData);
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee Name</th>
          <th>Job Title</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employeeData.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.employeeName}</td>
            <td>{employee.jobTitle}</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
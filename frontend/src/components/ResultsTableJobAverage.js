import React, { useState, useEffect } from 'react';

const JobsSummaryTable = () => {
  const [jobsSummaryData, setJobsSummaryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/employees/summary")
      .then(res => res.json())
      .then((result) => { setJobsSummaryData(result); })
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(jobsSummaryData).map(([jobTitle, average], index) => (
          <tr key={index}>
            <td>{jobTitle.split(';')[0]}</td>
            <td>{average}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JobsSummaryTable;

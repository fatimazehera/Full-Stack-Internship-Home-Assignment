import { useState } from 'react';
import { Inter } from 'next/font/google';
import EmployeeTable from '../components/ResultsTable'; 
import JobsSummaryTable from '../components/ResultsTableJobAverage'; 


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleProcess = () => {
    // Add your file processing logic here
    // For simplicity, let's assume data is processed successfully
    setShowTable(true); // Set showTable to true after processing
  };
  return (
    <main className={`flex min-h-screen flex-col items-center p-8 ${inter.className}`}>
      <div>
        <input
          type="file"
          onChange={handleFileUpload}
          accept=".csv"
          // The accept attribute restricts file selection to only .CSV files
        />
        {selectedFile && <button onClick={handleProcess}>Process</button>}
      </div>

      {showTable && <JobsSummaryTable />}
      {showTable && <EmployeeTable />}
    </main>
  );
}

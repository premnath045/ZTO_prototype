import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import csvData from '../../Assets/files/Siesta_Asset-data_hosts.csv';
import Papa from 'papaparse';


function AvailableIdentityTable({setTotalRows, filters}) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvData);
      const reader = response.body.getReader();
      const result = await reader.read(); 
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      console.log('csv', csv);
      const results = Papa.parse(csv, { 
        header: true, 
        dynamicTyping: true // Automatically convert values to appropriate data types
      });


      const cols = results.meta.fields.map((field) => ({ field, headerName: field, width: 150 }));
      const tableRows = results.data; 

      setColumns(cols);
      setRows(tableRows);
      setTotalRows(results.data.length);
    };

    fetchData();

  }, []);

    return (
      <div>
          <div style={{ height: 475, width: '100%' }}>
              <DataGrid
                  rows={rows}
                  columns={columns}
                  getRowId={(rows) => rows.ID} // Assuming 'recordNumber' is your unique field
                  initialState={{
                  pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                  },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  // getRowClassName={(params) => {
                  //   // Check if filter value matches row value 
                  //   if(filters.includes(params.row.ip)) {
                  //     // Return class name for green background
                  //     return 'greenRow';  
                  //   }
          
                  //   // Return class name for red background
                  //   return 'redRow';
                  // }}
              />
          </div>
      </div>
    );
}


export default AvailableIdentityTable;
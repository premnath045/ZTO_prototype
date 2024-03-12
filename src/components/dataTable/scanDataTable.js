import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import csvData from '../../Assets/files/Siesta_Asset-data_hosts.csv';
import Papa from 'papaparse';


function ScanDataTable({setTotalRows, filters}) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
//   const [totalRows, setTotalRows] = useState(0);

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

    console.log('selected filters', filters);
    console.log('rows', rows);


    // Filter rows based on IP Address (handling spaces)
    const filteredRows = rows.filter(row => {
      return row["IP Address"] === filters["IP Address"]; 
    });

    // Get filtered column values (accessing 'IP Address' property)
    const ipAddresses = filteredRows.map(row => row["IP Address"]); 


    console.log('IP addresses', ipAddresses);

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
                  //   if (filters && filters.includes(params.row.ip)) { // Check if filters exists
                  //     return 'highlightRow';
                  //   }
                  //   return '';
                  // }}
              />
          </div>
      </div>
    );
}


export default ScanDataTable;
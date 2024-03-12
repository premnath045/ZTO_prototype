import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import csvData from '../../Assets/files/Siesta_Asset-data_hosts.csv';
import Papa from 'papaparse';
import identityCollection from '../../deviceIdentity/identityCollection';


function IdentityDataTable({setTotalRows, filters}) {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
  
      // Create columns based on identity data structure
      const cols = Object.keys(identityCollection[0]).map((field) => ({
        field,
        headerName: field,
        width: 175,
      }));
  
      setColumns(cols);
      setRows(identityCollection);
      setTotalRows(identityCollection.length); 
    }, []);
  
    return (
      <div>
        <div style={{ height: 475, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row["Serial ID"]} // Assuming "Serial ID" is unique
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
  


export default IdentityDataTable;
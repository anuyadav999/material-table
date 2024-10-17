import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import "./App.css";





function App() {
  const [rows, setRowsData] = useState<GridRowsProp[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'body', headerName: 'Body', width: 150 },
  ];
 // const rows: GridRowsProp =data;
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setRowsData(data);
      
      console.log(data);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <DataGrid rows={rows} columns={columns} />
      {/* <table>
        <thead>
          <th>
            <td width={100}>Id</td>
            <td width={100}>Title</td>
            <td width={200}>Body</td>
          </th>
        </thead>
        <tbody>
          {useData?.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;

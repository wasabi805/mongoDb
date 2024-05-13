// import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "../../../store";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "userName", headerName: "User name", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    // editable: true,
  },
  //   {
  //     field: "lastName",
  //     headerName: "Last name",
  //     width: 150,
  //     editable: true,
  //   },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 110,
    // editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, userName: "John", name: "Snow", email: "Jon", phone: 14 },
  { id: 2, userName: "Jamie", name: "Lannister", email: "Cersei", phone: 31 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export const AllUsersGrid = () => {
  const { users } = useAppSelector((state) => state.userSlice);
  console.log("what is users from grid", users);
  const { userName, name, email, phone, address } = users;

  const newRows = users.map((item) => {
    console.log(item);
    return {
      ...item,
      id: item._id,
    };
  });

  console.log(newRows);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={newRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

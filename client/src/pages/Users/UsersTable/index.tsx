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

export const AllUsersGrid = ({ onRowClick }) => {
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
        onRowClick={(e) => onRowClick({ data: e.row })}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

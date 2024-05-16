import { FC } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppSelector, useAppDispatch } from "../../../store";
import { userApis } from "../../../store/slices/userSlice";
import {
  toggleEditUserModal,
  setEditUser,
} from "../../../store/slices/userSlice";

interface AllUsersGridProp {
  onRowClick: ({
    data: {
      e: {},
    },
  }) => void;
}

export const AllUsersGrid: FC<AllUsersGridProp> = ({ onRowClick }) => {
  const { users } = useAppSelector((state) => state.userSlice);

  const dispatch = useAppDispatch();
  const { deleteUser } = userApis;

  const newRows = users.map((item) => {
    console.log(item);
    return {
      ...item,
      id: item._id,
    };
  });

  const handleDeleteUser = ({ userId }: { userId: string }) => {
    dispatch(deleteUser({ userId }));
  };

  const handleEditUser = ({ userId }: { userId: string }) => {
    const user = users?.find((user) => user?._id === userId);
    dispatch(setEditUser({ user, userId }));

    //pop open modal
    dispatch(toggleEditUserModal());
  };

  const columns: GridColDef<(typeof newRows)[number]>[] = [
    { field: "userName", headerName: "User name", width: 120 },
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
      width: 250,
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

    {
      field: "actions",
      headerName: "actions",
      description: "",
      sortable: false,
      width: 160,

      renderCell: ({ id }) => {
        return (
          <>
            <Button
              name="edit"
              onClick={(e) => {
                e.stopPropagation();

                console.log("what is id clicked", id);
                return handleEditUser({ userId: id.toString() });
              }}
            >
              edit
            </Button>
            <Button
              name="delete"
              onClick={(e) => {
                e.stopPropagation();
                console.log("what is type", typeof id);
                return handleDeleteUser({ userId: id.toString() });
              }}
            >
              delete
            </Button>
          </>
        );
      },
      // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={newRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        onRowClick={(e) => onRowClick({ data: e.row })}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

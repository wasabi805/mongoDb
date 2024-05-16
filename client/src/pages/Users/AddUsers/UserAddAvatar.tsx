import { useCallback } from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../../store";
import { setPanelAddUserForm } from "../../../store/slices/userSlice";

import { useDropzone } from "react-dropzone";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyDropzone({ handleDrop }: any) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = function async() {
        // console.log(reader.result);
        console.log("get file size", file);

        handleDrop({
          name: file.name,
          file: reader.result,
          size: file.size,
        });
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{ background: "lime", border: "1px solid blue" }}
    >
      <input
        {...getInputProps()}
        style={{ minHeight: "10rem", background: "magenta" }}
      />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}

const UserAddAvatar = () => {
  //   const [localState, setLocalState] = useState({
  //     avatar: null,
  //   });
  const dispatch = useAppDispatch();

  const handleDrop = async ({
    file,
    name,
    size,
  }: {
    file: string;
    name: string;
    size: number;
  }) => {
    const droppedFileB64 = await file;

    const fileType = droppedFileB64.substring(
      "data:image/".length,
      droppedFileB64.indexOf(";base64"),
    );

    console.log("what is the fileType", { name, fileType, size });
    // console.log('what is droppedFileB64', droppedFileB64)
  };

  return (
    <Box className="add-user-avatar">
      <Box className={"drag-and-drop-container"}>
        {<MyDropzone handleDrop={handleDrop} />}
      </Box>

      <div className="button-row">
        <Button
          sx={{ maxHeight: "3rem" }}
          className={"submit-button"}
          variant={"contained"}
          // sx={{ width: "8rem" }}
          // onClick={handleSubmitNewUser}
          onClick={() =>
            dispatch(setPanelAddUserForm({ addUser: { panel: "form-data" } }))
          }
        >
          Prev
        </Button>

        <Button
          sx={{ maxHeight: "3rem" }}
          className={"submit-button"}
          variant={"contained"}
          // sx={{ width: "8rem" }}
          // onClick={handleSubmitNewUser}
          onClick={() =>
            dispatch(
              setPanelAddUserForm({ addUser: { panel: "user-confirm-panel" } }),
            )
          }
        >
          Next
        </Button>
      </div>
    </Box>
  );
};

export default UserAddAvatar;

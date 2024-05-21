import React from "react";
import Canvas from "../../../../common/Canvas/Canvas";
import { useAppSelector } from "../../../../store";
import { UserAddAvatarPreviewContainer } from "./styled";

const UserAddAvatarPreview = () => {
  const { b64Str } = useAppSelector((state) => state.userSlice.addUser.avatar);

  return (
    <UserAddAvatarPreviewContainer className="user-add-avatar-preview">
      <div className="avatar-preview">
        <Canvas
          shape={"square"}
          className={""}
          height={200}
          width={200}
          b64Str={b64Str}
        />
      </div>

      <div>asjasd jklasjsd jjaskjsa</div>
    </UserAddAvatarPreviewContainer>
  );
};

export default UserAddAvatarPreview;

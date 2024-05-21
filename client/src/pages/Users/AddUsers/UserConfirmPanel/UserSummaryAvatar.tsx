import React from "react";
import { useAppSelector } from "../../../../store";
import Canvas from "../../../../common/Canvas/Canvas";

const UserSummaryAvatar = () => {
  const { addUser } = useAppSelector((state) => state.userSlice);
  return (
    <div>
      <Canvas
        shape={"circle"}
        className={""}
        height={100}
        width={100}
        b64Str={addUser.avatar.b64Str}
      />
    </div>
  );
};

export default UserSummaryAvatar;

import React from "react";
import { Typography } from "@mui/material";

const InlineKeyValue = ({ inlineKey, value }) => {
  return (
    <div sx={{ display: "flex", flexDirection: "row" }}>
      <Typography
        variant={"h6"}
        sx={{ display: "inline", marginRight: "0.25rem" }}
      >
        {inlineKey}
      </Typography>
      :
      <Typography
        variant={"body1"}
        sx={{ display: "inline", marginLeft: "0.25rem" }}
      >
        {value}
      </Typography>
    </div>
  );
};

export default InlineKeyValue;
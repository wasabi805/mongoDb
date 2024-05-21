import React, { useState } from "react";
import { useMediaQuery, Box } from "@mui/material";

const useAppMedia = ({ theme }) => {
  const { breakpoints } = theme;
  const isDevice = useMediaQuery(breakpoints.down("xs"));
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isTablet = useMediaQuery(breakpoints.down("md"));
  const isDesktop = useMediaQuery(breakpoints.down("lg"));
  const isTv = useMediaQuery(breakpoints.up("xl"));

  return {
    isDevice,
    isMobile,
    isTablet,
    isDesktop,
    isTv,
  };
};

export default useAppMedia;

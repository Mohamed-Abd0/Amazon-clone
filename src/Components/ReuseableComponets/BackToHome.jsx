import React from "react";
import { Box, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const BackToHome = () => {
  return (
    <Box
      sx={{
        my: 4,
        textAlign: "left",
        a: {
          textDecoration: "none",
          color: "black",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
        },
        "a:hover": { textDecoration: "underline" },
      }}
    >
      <Link to="/">
        <Icon sx={{ mt: "-5px" }}>
          <KeyboardArrowLeftIcon />{" "}
        </Icon>
        <span>Back To Home</span>
      </Link>
    </Box>
  );
};

export default BackToHome;

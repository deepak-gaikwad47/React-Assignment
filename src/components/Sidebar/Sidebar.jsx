import React from "react";
import { IconButton } from "@mui/material";
import { Home as HomeIcon, ExitToApp as LogoutIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        position: "fixed",
        width: "4rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton color="primary" aria-label="add to shopping cart">
        <HomeIcon />
      </IconButton>
      <IconButton onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  SummarizeOutlined as SummarizeOutlinedIcon,
  ShoppingCart as ShoppingCartIcon,
  CalendarMonthOutlined as CalendarMonthOutlinedIcon,
} from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReportForm from "../../pages/Reports/Reports";
import TableComponent from "../../pages/Table/Table";
import CalendarComponent from "../../pages/Calender/Calender";
import { MENU_LIST } from "../../libs/constant";

const Layout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, index) => {
    setActiveIndex(index);
  };
  
  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: 240 }, position: "fixed", left: "4rem" }}
        aria-label="Home"
        className="container"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              position: "fixed",
              left: "3rem",
            },
          }}
        >
          <Toolbar />
          <Divider />
          <List>
            {MENU_LIST?.map((text, index) => (
              <>
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    key={index}
                    onClick={(e) => handleClick(e, index)}
                  >
                    <ListItemIcon>
                      {text === "Reports" && <SummarizeOutlinedIcon />}
                      {text === "Work Orders" && <ShoppingCartIcon />}
                      {text === "Calender Type" && (
                        <CalendarMonthOutlinedIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText key={index} primary={text} />
                    <ArrowForwardIosIcon />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
          </List>
        </Drawer>
      </Box>
      <Box
        className="container"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          position: "relative",
          top: "4rem",
          left: "20rem",
        }}
      >
        {activeIndex === 0 && <ReportForm />}
        {activeIndex === 1 && <TableComponent />}
        {activeIndex === 2 && <CalendarComponent />}
      </Box>
    </>
  );
};

export default Layout;

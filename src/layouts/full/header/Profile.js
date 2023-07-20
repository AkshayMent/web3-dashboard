import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import { IconListCheck, IconMail, IconUser } from "@tabler/icons";

import ProfileImg from "src/assets/images/profile/user-1.jpg";
import { ACTIONS } from "src/Redux/Actions";
import { useDispatch } from "react-redux";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const dispatch = useDispatch();
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const logoutHandle = async () => {
    const accounts = await window.ethereum
      .request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {}
          }
        ]
      })
      .then(async () => {
        await window.ethereum.request({
          method: "eth_requestAccounts"
        });
      });
    console.log(accounts, "<<<thisisaccount");
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main"
          })
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={ProfileImg}
          alt={ProfileImg}
          sx={{
            width: 35,
            height: 35
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px"
          }
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconMail width={20} />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconListCheck width={20} />
          </ListItemIcon>
          <ListItemText>My Tasks</ListItemText>
        </MenuItem>
        {/* <Box mt={1} py={1} px={2}>
          <Button
            // to="/auth/login"
            variant="outlined"
            color="primary"
            component={Link}
            onClick={logoutHandle}
            fullWidth
          >
            Logout
          </Button>
        </Box> */}
      </Menu>
    </Box>
  );
};

export default Profile;

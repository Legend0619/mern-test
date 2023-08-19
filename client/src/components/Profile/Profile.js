import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  List,
} from "@mui/material";

import { Check, Close } from "@mui/icons-material";

import { getLogs } from "../../actions/test";

import { styles } from "./styles";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { logs } = useSelector((state) => state.test);

  useEffect(() => {
    dispatch(getLogs());
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history("/");
        }}
      >
        Back
      </Button>
      <h1>Profile</h1>
      <List>
        {logs.map((log, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                {log.result ? <Check color="green" /> : <Close color="red" />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography>{log.test.description}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Profile;

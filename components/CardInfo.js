// blogtype, -- social/gadget etc
// avatar,-- avatar of user or display picture -- used absolute positioning
// readtime, -- reading time of the blog -- used absolute positioning
// title,--- title of the blog
// views,---- how many viewed
// replies,---- total replies on blog
// day,
// date,   day and date of blog/post created

// this card component receives above mentioned props
// NOTE*****  image source need to be updated as required

import React from "react";
import {
  Avatar,
  Box,
  Card as Paper,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Message, RemoveRedEyeOutlined } from "@mui/icons-material";

const CardInfo = ({
  blogtype,
  avatar,
  readtime,
  title,
  views,
  replies,
  day,
  date,
}) => {
  const cardStyles = {
    height: 468,
    position: "relative",
  };

  const avatarStyles = {
    bgcolor: "red",
    position: "absolute",
    top: 235,
    left: "1.5em",
  };

  const chipStyles = {
    bgcolor: "#fff",
    position: "absolute",
    top: 200,
    right: "2em",
  };

  const boxStyles = {
    height: 220,
    p: 3.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Paper sx={cardStyles}>
      <Avatar sx={avatarStyles} aria-label="card">
        {avatar}
      </Avatar>
      <Chip label={`${readtime} mins read`} sx={chipStyles} />
      <CardMedia
        component="img"
        alt="Beautiful Flowers Field at Night"
        height="254"
        image="https://img.freepik.com/premium-photo/beautiful-flowers-field-night-against-full-moon-view-from-generative-ai_864588-9248.jpg"
      />
      <Box sx={boxStyles}>
        <Box>
          <Chip label={blogtype} />
        </Box>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body">
            <RemoveRedEyeOutlined /> {views}
          </Typography>
          <Typography variant="body" sx={{ marginLeft: "-6em" }}>
            <Message /> {replies}
          </Typography>
          <Typography variant="body">{` ${day}, ${date}`}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardInfo;

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
  // Styles
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
    height: 170,
    p: 3.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  // Component
  return (
    <Paper sx={cardStyles}>
      {/* Avatar */}
      <Avatar sx={avatarStyles} aria-label="card">
        {avatar}
      </Avatar>

      {/* Readtime Chip */}
      <Chip label={`${readtime} mins read`} sx={chipStyles} />

      {/* Card Media */}
      <CardMedia
        component="img"
        alt="Beautiful Flowers Field at Night"
        height="254"
        image="https://img.freepik.com/premium-photo/beautiful-flowers-field-night-against-full-moon-view-from-generative-ai_864588-9248.jpg"
      />

      {/* Blog Info Box */}
      <Box sx={boxStyles}>
        {/* Blog Type Chip */}
        <Box>
          <Chip label={blogtype} />
        </Box>

        {/* Blog Title */}
        <Typography variant="h6" component="div">
          {title}
        </Typography>

        {/* Views, Replies, and Date Info */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Views and Replies */}
          <Box
            sx={{
              width: "10%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="body"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <RemoveRedEyeOutlined /> {views}
            </Typography>
            <Typography
              variant="body"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Message /> {replies}
            </Typography>
          </Box>

          {/* Date Info */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Typography variant="body">{` ${day}, ${date}`}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardInfo;

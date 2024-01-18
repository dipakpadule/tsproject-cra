import { Box, Paper } from "@mui/material";
import React from "react";
import CardInfo from "./CardInfo";

const bloginfo = [
  {
    blogtype: "social",
    avatar: "A",
    readtime: 2,
    title: "Exploring Social Dynamics: Blog 1",
    views: 200,
    replies: 10,
    day: "Mon",
    date: "Jan 15",
  },
];

const BlogPage = () => {
  return (
    <Box sx={{ paddingInline: { xs: 2, sm: 5, md: 10, lg: 25 } }}>
      <Paper>
        <CardInfo {...bloginfo[0]} />
      </Paper>
    </Box>
  );
};

export default BlogPage;

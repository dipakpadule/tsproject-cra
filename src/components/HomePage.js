import { Grid } from "@mui/material";
import React from "react";
import CardInfo from "./CardInfo";

const blogs = [
  {
    id: 1,
    blogtype: "social",
    avatar: "A",
    readtime: 2,
    title: "Exploring Social Dynamics: Blog 1",
    views: 200,
    replies: 10,
    day: "Mon",
    date: "Jan 15",
  },
  {
    id: 2,
    blogtype: "gadget",
    avatar: "B",
    readtime: 3,
    title: "Gadget Trends: Blog 1 Unveiled",
    views: 250,
    replies: 15,
    day: "Tue",
    date: "Feb 20",
  },
  {
    id: 3,
    blogtype: "army",
    avatar: "C",
    readtime: 4,
    title: "Inside the Army: Blog 1 Insights",
    views: 300,
    replies: 20,
    day: "Wed",
    date: "Mar 25",
  },
  {
    id: 4,
    blogtype: "police",
    avatar: "D",
    readtime: 5,
    title: "Police Chronicles: Blog 1 Unmasked",
    views: 180,
    replies: 8,
    day: "Thu",
    date: "Apr 10",
  },
  {
    id: 5,
    blogtype: "entertainment",
    avatar: "E",
    readtime: 2,
    title: "Entertainment Odyssey: Blog 1",
    views: 220,
    replies: 12,
    day: "Fri",
    date: "May 5",
  },
  {
    id: 6,
    blogtype: "social",
    avatar: "F",
    readtime: 3,
    title: "Social Reflections: Blog 2 Insights",
    views: 270,
    replies: 18,
    day: "Sat",
    date: "Jun 30",
  },
  {
    id: 7,
    blogtype: "gadget",
    avatar: "G",
    readtime: 4,
    title: "Gadget Wonders: Blog 2 Uncovered",
    views: 320,
    replies: 22,
    day: "Sun",
    date: "Jul 15",
  },
  {
    id: 8,
    blogtype: "army",
    avatar: "H",
    readtime: 2,
    title: "Army Chronicles: Blog 2 Revealed",
    views: 190,
    replies: 9,
    day: "Mon",
    date: "Aug 10",
  },
  {
    id: 9,
    blogtype: "police",
    avatar: "I",
    readtime: 3,
    title: "Police Unveiled: Blog 2 Stories",
    views: 240,
    replies: 14,
    day: "Tue",
    date: "Sep 20",
  },
  {
    id: 10,
    blogtype: "entertainment",
    avatar: "J",
    readtime: 5,
    title: "Entertainment Saga: Blog 2 Chronicles",
    views: 280,
    replies: 16,
    day: "Wed",
    date: "Oct 5",
  },
];

const HomePage = () => {
  return (
    <Grid
      container
      spacing={"1.5em"}
      sx={{ paddingInline: "2.5em", marginTop: 5 }}
    >
      {Array.isArray(blogs) &&
        blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <CardInfo {...blog} />
          </Grid>
        ))}
    </Grid>
  );
};

export default HomePage;

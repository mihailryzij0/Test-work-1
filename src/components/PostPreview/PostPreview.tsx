import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import styles from "./PostPreview.module.css";
interface PostPreview {
  userId: number;
}

export default function PostPreview({ userId }: PostPreview) {
  const { posts, imagePosts, status } = useAppSelector((state) => state.posts);
  return status === "fulfilled" ? (
    <section className={styles.previewBox}>
      <Typography textAlign={"center"} variant="h3">
        Посты
      </Typography>
      <div className={styles.preview}>
        {posts?.slice(0, 3).map((post) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://jsonplaceholder.typicode.com/photos?id=${userId}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  ) : (
    <div></div>
  );
}

import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../components/hooks/redux-hooks";
import { getUser } from "../store/slices/userSlice";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./style/userPage.module.css";
import myPhoto from "./../asset/myPhoto.jpg";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import PostPreview from "../components/PostPreview/PostPreview";
import { getUserPosts } from "../store/slices/postsSlice";
export default function UserPage() {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const { user, status } = useAppSelector((state) => state.user);
  const { posts, status: postStatus } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function callback() {
      await dispatch(getUser(Number(id)));
      await dispatch(getUserPosts(Number(id)));
    }
    callback();
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return status === "fulfilled" ? (
    <div className="container section">
      <div className={styles.aboutUser}>
        <div className={styles.imageBox}>
          <img src={myPhoto} alt="user-photo" className={styles.image} />
          <div className={styles.imageFooter}>
            <Typography color={"#fff"} variant="h5">
              {user?.name}
            </Typography>
          </div>
        </div>
        <div className={styles.info}>
          <List>
            <ListSubheader component="h5">
              Информация о пользователе
            </ListSubheader>
            <ListItemButton component="a" href={`mailto:${user?.phone}`}>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={user?.email} />
            </ListItemButton>
            <ListItemButton component="a" href={`tel:${user?.phone}`}>
              <ListItemIcon>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText primary={user?.phone} />
            </ListItemButton>
            <ListItemButton component="a" href={user?.website}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={user?.website} />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Company" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={user?.company.name} />
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={user?.company.bs} />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      </div>
      <PostPreview userId={Number(id)} />
    </div>
  ) : (
    <div>p</div>
  );
}

import React from "react";
import { UserPropsIF } from "../Users.interface";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import "./UserCard.scss";

export default function UserCard(props: UserPropsIF) {
  const openProfile = () => {
    window.open(props.html_url);
  };

  // render() {
  // const { id, avatar_url, profile_url, userName } = this.props.;
  return (
    <div className="userCardContainer">
      <Card className="userCard">
        <CardContent>
          <figure>
            <img className="avatarImage" src={props.avatar_url} alt="" />
          </figure>
          <Typography color="textSecondary" gutterBottom>
            {props.login}
          </Typography>

          {/* <Typography color="textSecondary">adjective</Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography> */}
        </CardContent>
        <CardActions className="cardAction">
          <Button color="primary" onClick={openProfile} size="small">
            Visit Profile
          </Button>
        </CardActions>
      </Card>
    </div>
  );
  // }
}

UserCard.defaultProps = {
  id: "123",
  userName: "mickeyminion14",
  html_url: "www.google.com",
  avatar_url:
    "https://vignette.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg/revision/latest/scale-to-width-down/350?cb=20151224154354",
};

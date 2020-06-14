import React, { PureComponent } from "react";
import UserCard from "./UserCard/UserCard";
import { UsersStateIF } from "./Users.interface";
import axios from "axios";
import {
  GITHUB_USERS_GET,
  GITHUB_USERS_SEARCH_GET,
} from "../../constants/api-url";
import { searchService } from "../../services/Search.service";
import { debounceTime } from "rxjs/operators";
import { SEARCH_PARAMS } from "../../constants/api-params";

export class Users extends PureComponent {
  props: any;
  state: UsersStateIF = {
    users: [],
  };

  searchParams = { ...SEARCH_PARAMS };
  previousSearchText = "";

  componentWillMount() {
    this.getUsersList();
    searchService
      .getSearchText()
      .pipe(debounceTime(300))
      .subscribe((data: any) => {
        // eslint-disable-next-line
        if (
          data.searchText !== "" &&
          data.searchText !== this.previousSearchText
        ) {
          console.log("came here");

          this.searchParams.q = data.searchText;
          this.previousSearchText = data.searchText;
          this.searchUsers();
          return;
        }

        if (data.searchText === "") {
          this.getUsersList();
          return;
        }
      });
  }

  searchUsers = () => {
    this.props.isLoading(true);

    axios
      .get(GITHUB_USERS_SEARCH_GET, { params: this.searchParams })
      .then((data) => {
        this.setState({
          users: [...data.data.items],
        });
        this.props.isLoading(false);
      })
      .catch((err) => {
        this.setState({
          users: [],
        });
        this.props.isLoading(false);
      });
  };
  getUsersList = () => {
    this.props.isLoading(true);
    axios
      .get(GITHUB_USERS_GET)
      .then((data: any) => {
        this.setState({
          users: [...data.data],
        });
        this.props.isLoading(false);
      })
      .catch((err) => {
        this.setState({
          users: [],
        });
        this.props.isLoading(false);
      });
  };

  render() {
    return this.state.users.length > 0 ? (
      <div>
        {this.state.users.map((user) => (
          <div key={user.id} className="col-md-3">
            <UserCard
              login={user.login}
              avatar_url={user.avatar_url}
              html_url={user.html_url}
              id={user.id}
            />
          </div>
        ))}
      </div>
    ) : (
      <div>
        <h1>No data Found !</h1>
      </div>
    );
  }
}
